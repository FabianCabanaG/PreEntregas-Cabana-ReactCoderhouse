import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { getProducts } from "../../mock/data";
import { useParams } from "react-router-dom";

const Itemlistcontainer = () => {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
        getProducts()
            .then((res) => {
                if(categoryId){
                setProducts(res.filter((item)=>item.category === categoryId))    
                } else {
                setProducts(res)
            }
            })
            .catch((err) => console.log(err))
    },[categoryId])


    return (
        <>
            <ItemList
                products={products}
            />
        </>
    )

}

export default Itemlistcontainer