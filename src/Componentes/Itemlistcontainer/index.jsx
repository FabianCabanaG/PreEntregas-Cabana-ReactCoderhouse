import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from 'firebase/firestore';



const Itemlistcontainer = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()

    useEffect(() => {
        // getProducts()
        //     .then((res) => {
        //         if(categoryId){
        //         setProducts(res.filter((item)=>item.category === categoryId))    
        //         } else {
        //         setProducts(res)
        //     }
        //     })
        //     .catch((err) => console.log(err))
        const db = getFirestore();
        const data_products = collection(db, 'products');
        getDocs(data_products)
            .then((snapshot) => {
                const datafb = snapshot.docs.map(
                    (dat) => ({
                        ...dat.data()
                        , id: dat.id
                    }))
                setProducts(datafb)

                if (categoryId) {
                    setProducts(datafb.filter((item) => item.category === categoryId))
                } else {
                    setProducts(datafb)
                }

            }

            )
            .catch((error) => console.log('error:', error))
    }, [categoryId])


    return (
        <>
            <ItemList
                products={products}
            />
        </>
    )

}

export default Itemlistcontainer