import { useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import ItemCount from '../ItemCount';
import { CartContext } from '../../context/CartContext';
const ItemDetail = (props) => {
    const { cart, setCart, setTotal, total } = useContext(CartContext);
    console.log(cart);


    const onAdd = (cantidad) => {
        // console.log('conteo itemdetail ', cantidad);
        const next_val = { item: props.product.name, amount: cantidad }
        const arrayCopy = [...cart, next_val]
        setCart(arrayCopy);
        localStorage.setItem('items', JSON.stringify(arrayCopy));
        // console.log('carrito', cart);
        // console.log('cantidad', cart.amount);
        if (total === 0) { setTotal(cantidad) } else setTotal(total + cantidad)
    };

    return (
        <>

            <Card style={{ width: '38rem', height: '38rem' }}>
                <Card.Img variant="top" src={props.product.img} />
                <Card.Body>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Text>
                        {props.product.description}
                    </Card.Text>
                    <Card.Text>
                        ${props.product.price}
                    </Card.Text>
                    <ItemCount stock={props.product.stock} onAdd={onAdd} />
                    <Button variant="secondary">Volver </Button>
                </Card.Body>
            </Card>
        </>
    )


}

export default ItemDetail