import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext

export const CartProvider = ({ defaultValue = [], children }) => {
    
    const [cart, setCart] = useState(defaultValue);

    const [totalQ, setTotalQ] = useState(0);

    const [totalP, setTotalP] = useState(0);

    const clear = () => {
        setCart([]);
        setTotalQ(0);
        setTotalP(0);
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
        setTotalQ(totalQ + quantity);
        setTotalP(totalP + (item.precio * quantity));
    }

    const isInCart = (id) => {
        return cart.find((e) => e.item.id === id);
    }

    const removeItem = (id) => {
        const encontrado = isInCart(id);
        setTotalQ(totalQ - encontrado.quantity);
        setTotalP(totalP - (encontrado.item.precio * encontrado.quantity));
        const cartCopy = [...cart].filter(e => e.item.id !== id);
        setCart(cartCopy);
    }

    const totalPrice = (id) => {
        const encontrado = isInCart(id);
        return encontrado.item.precio * encontrado.quantity;
    }

    useEffect(() => {
        console.log(cart)
    },[cart])

    const cxt = {
        cart,
        clear,
        addItem,
        isInCart,
        removeItem,
        totalQ,
        totalP,
        totalPrice
    }

    return (
        <Provider value={cxt}>
            {children}
        </Provider>
    )
}
