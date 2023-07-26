import { useEffect, useState } from "react"
import { getItem } from "../../mock/data"
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product,setProduct] = useState({});
    const {id} = useParams()

    useEffect(() =>{
        getItem(id)
        .then((res)=>setProduct(res))
    },[])

    return (

        <>
            <ItemDetail product={product}/>
        </>
    )


}

export default ItemDetailContainer