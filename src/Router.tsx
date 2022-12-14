import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout/Checkout";
import { Home } from "./pages/Home/Home";
import { SuccessPage } from "./pages/SuccessPage/SuccessPage";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pedido-confirmado" element={<SuccessPage/>} />
      </Route>
    </Routes>
  )
}