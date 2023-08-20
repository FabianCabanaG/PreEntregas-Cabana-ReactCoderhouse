import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import cartwidimg from '../../assets/cart.png'

import './style.css'

const Cartwidget = (props) => {
    const {total} = useContext(CartContext);



    return (
        <div id='container'>
            <img id="cartwidget" src={cartwidimg} alt={"cart"} />
            <p id='numbercartwidget'>{total}</p>
        </div>

    )


}

export default Cartwidget