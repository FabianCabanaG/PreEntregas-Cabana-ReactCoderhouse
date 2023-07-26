import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import ItemCount from '../ItemCount';
const ItemDetail = (props) => {
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
                    <ItemCount stock = {props.product.stock} />
                    <Button variant="secondary">Volver </Button>
                </Card.Body>
            </Card>
        </>
    )


}

export default ItemDetail