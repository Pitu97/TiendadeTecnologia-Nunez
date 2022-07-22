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
                    e.price = e.price + (e.item.precio * quantity);
                }
            }
            setCart(cartCopy);
        } else {
            const price = item.precio * quantity;
            setCart([...cart,{ item: item, quantity: quantity, price: price }]);
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
    }

    return (
        <Provider value={cxt}>
            {children}
        </Provider>
    )
}
