// import { useContext,useState } from 'react';
// import { CartContext } from '../../context/CartContext';

export default function CartWidgetItems() {
    // const [storageItems, setItems] = useState([]);
    // const { cart } = useContext(CartContext);
    // console.log('carrito', cart)
    // const cartt = [...cart]
    // console.log(cart[0])
    // console.log('fixcarrito',cart.lenght)
    const storageItems = JSON.parse(localStorage.getItem('items'));
    console.log('storage', storageItems)
    console.log('storage2', storageItems.map((i) => i.item))
    console.log('storage3', storageItems.map((i) => i.amount))
    return (
        <>
            {

                <div style={{ border: "1px solid black" }}>
                    <div>
                        <h1>{storageItems[0]?.item}</h1>
                        <p>{storageItems[0]?.amount}</p>

                    </div>
                    <div>
                        <h1>{storageItems[1]?.item}</h1>
                        <p>{storageItems[1]?.amount}</p>
                    </div>
                    <div>
                        <h1>{storageItems[2]?.item}</h1>
                        <p>{storageItems[2]?.amount}</p>
                    </div>
                    <div>
                        <h1>{storageItems[3]?.item}</h1>
                        <p>{storageItems[3]?.amount}</p>
                    </div>





                    {storageItems.map((i) => {
                        <div>
                            <p>existo</p>
                            <h1>{i.item}</h1>
                            <p>Cantidad:{i.amount}</p>
                        </div>
                    })
                    }
                </div>

            }




        </>
    )
}
