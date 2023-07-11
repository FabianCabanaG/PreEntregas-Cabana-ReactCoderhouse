import cart from '../../assets/cart.png'

import './style.css'

const Cartwidget = (props) => {
    return (
        <div>
            <img id="cartwidget" src={cart} alt={"cart"} />
            <p id='numbercartwidget'>{props.value}</p>
        </div>

    )


}

export default Cartwidget