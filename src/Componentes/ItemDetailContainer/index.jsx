import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const [product,setProduct] = useState({});
    const {id} = useParams()


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
                    setProducts(datafb);
                    setProduct(datafb.find((item) => item.id === id))
                }
            )
            .catch((error) => console.log('error:', error))
    
    },[])

    // useEffect(() =>{
    //     getItem(id)
    //     .then((res)=>setProduct(res))
    // },[])

    return (

        <>
            <ItemDetail product={product}/>
        </>
    )


}

export default ItemDetailContainer