import { useState,useContext } from "react";
import Button from "react-bootstrap/esm/Button"
import Stack from 'react-bootstrap/Stack';
import { CartContext } from "../../context/CartContext";

const ItemCount = ({stock, onAdd}) => {
    const [count,setCount] = useState(1)

    const sum = () => {if(count < stock){setCount(count + 1)}}; 
    const substract = () => {if(count > 0) {setCount(count-1)}};
    
    return (
        <div>
            <div>
                <Stack direction="horizontal" gap={3}>
                    <Button variant="info" onClick={substract}> - </Button>
                    <span className="btn"> {count} </span>
                    <Button variant="info" onClick={sum}> + </Button>
                </Stack>
            </div>
            <Button variant="success" className="mt-2 mb-2" onClick={() => onAdd(count)}> Agregar a carrito </Button>


        </div>
    )


}

export default ItemCount