import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext

export const CartProvider = ({ defaultValue = [], children }) => {
    
    const [cart, setCart] = useState(defaultValue);

    const clear = () => {
        setCart([]);
    }

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            const cartCopy = [...cart]
            for ( const e of cartCopy ) {
                if(e.item.id === item.id) {
                    e.quantity = e.quantity + quantity;
                }
            }
            setCart(cartCopy);
        } else {
            setCart([...cart,{ item: item, quantity: quantity }]);
        }
    }

    const isInCart = (id) => {
        return cart.find((e) => e.item.id === id);
    }

    const removeItem = (id) => {
        const cartCopy = [...cart].filter(e => e.item.id !== id);
        setCart(cartCopy);
    }

    useEffect(() => {
        console.log(cart)
    },[cart])

    const cxt = {
        cart,
        clear,
        addItem,
        isInCart,
        removeItem
    }

    return (
        <Provider value={cxt}>
            {children}
        </Provider>
    )
}
