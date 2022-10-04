import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [screenProd] = useState([]); 
  const [selected, setSelected] = useState('');
  let foundProduct;
  let index;
  
  const handleChange = (event) => {
    /* alert(event.target.value); */
    setSelected(event.target.value);
  };


  const screenProduct = (product) => {
    const checkProductScreen = screenProd.filter((item) => item.id === product.id);

    if (checkProductScreen) {
      localStorage.setItem('id', JSON.stringify(product.id))
    }
  }

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      setCartItems(
        cartItems.map((cartProduct) =>
          cartProduct.id === product.id
            ? {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
            : cartProduct
        ))

    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    alert(`0${qty} ${product.name} Adicionado à Sacola`)
  }

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id);
    index = cartItems.findIndex((product) => product.id === id);

    if (value === 'inc') {
      foundProduct.quantity += 1;
      cartItems[index] = foundProduct;
      setTotalPrice(totalPrice + foundProduct.price);
      setTotalQuantities(totalQuantities + 1);
    }

    if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
        cartItems[index] = foundProduct;
        setTotalPrice(totalPrice - foundProduct.price);
        setTotalQuantities(totalQuantities - 1);
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        screenProduct,
        handleChange,
        selected,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);
