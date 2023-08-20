import { createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const [total, setTotal] = useState(0)

    

    // useEffect(() => {
    //     setTotal(cart.reduce((total, item) => {total + item.amount},0));
        
    //     console.log('conteo cart',cart.amount)
    //     // console.log('tot:',tot)
    //     console.log('total:',total)
    // }
    //     , [cart]
    // )


    return (
        <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
            {children}
        </CartContext.Provider>
    )
}

