import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';
import { coffeItemType } from './data/Menu/MenuItems';

interface ShoppingCartItem{
  id: number;
  quantity: number;
}

interface ShoppingCartContextType {
  shoppingCart: ShoppingCartItem[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCartItem[]>>;
  numberOfItemsInCart: number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([])
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0)

  let totalItemsInCart : number = shoppingCart.reduce((previousValue, item, index) => (previousValue + item.quantity), 0)

  useEffect(() => {
    setNumberOfItemsInCart(totalItemsInCart)
  }, [shoppingCart])

  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartContext.Provider 
        value={{
          shoppingCart: shoppingCart,
          setShoppingCart: setShoppingCart,
          numberOfItemsInCart: numberOfItemsInCart,
        }}
      >
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </ShoppingCartContext.Provider>
    </ThemeProvider>
  )
}

export default App
