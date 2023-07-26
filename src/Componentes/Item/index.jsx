import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <>
            <Card style={{ width: '18rem', height: '38rem' }}>
                <Card.Img variant="top" src={product.img} style={{ width: '286px', height: '400px' }}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <Button as={Link} to={`/item/${product.id}`} variant="primary">Ver detalle</Button>
                </Card.Body>
            </Card>
        </>
    )


}

export default Item