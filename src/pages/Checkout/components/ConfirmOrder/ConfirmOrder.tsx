import { CartItemDisplay } from "../../../../components/CartItemDisplay/CartItemDisplay";
import { ConfirmOrderContainer, ConfirmOrderWrapper, OrderViewer } from "./styles";
import { MenuItems } from "../../../../data/Menu/MenuItems";
import { ShoppingCartContext } from "../../../../App";
import { useContext } from "react";
import { OrderTotalPrice } from "../../../../components/OrderTotalPrice/OrderTotalPrice";

export function ConfirmOrder() {
  const { shoppingCart } = useContext(ShoppingCartContext)

  return (
    <ConfirmOrderContainer>
      <h1
        className="checkout-title"
      >
        Confirme seu pedido
      </h1>
      <ConfirmOrderWrapper>
        <OrderViewer>
          {shoppingCart.map((item, index) => {
            if (item.quantity > 0) {
              return (
                <div className="key__holder" key={index}>
                  <CartItemDisplay
                    productsData={MenuItems}
                    productId={item.id}
                    amountOfProducts={item.quantity}
                  />
                  <hr/>
                </div>
              )
            }
          })}
        </OrderViewer>
        <OrderTotalPrice itemsTotal={32.99} deliveryPrice={3.50} curencySymbol={"R$"}/>
      </ConfirmOrderWrapper>
    </ConfirmOrderContainer>
  )
}