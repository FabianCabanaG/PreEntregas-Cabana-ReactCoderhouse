import { getFirestore, collection, getDocs} from 'firebase/firestore';
import { useState } from 'react';


const [productList,setArray] = useState([]);

const db = getFirestore();
const data_products = collection(db, 'products');

getDocs(data_products)
    .then((snapshot) => {
        const datafb = snapshot.docs.map(
            (dat) =>( {
                ...dat.data()
                ,id:dat.id
            } ))
        setArray(datafb)
        }
    )
    .catch((error) => console.log('error:', error))

console.log(productList)


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false
        setTimeout(() => {
            if (error) {
                reject('Error:No hay datos')
            } else {
                resolve(productList)
            }
        }
            , 2000)
    })}
    
useEffect(
    () => {
    const db = getFirestore();
    const data_products = collection(db, 'products');
    getDocs(data_products)
        .then((snapshot) => {
            const datafb = snapshot.docs.map(
                (dat) =>( {
                    ...dat.data()
                    ,id:dat.id
                } ))
            setArray(datafb)
            }
        )
        .catch((error) => console.log('error:', error))

},[])

export const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productList.find((item) => item.id === id))
        }, 2000)
    })
}