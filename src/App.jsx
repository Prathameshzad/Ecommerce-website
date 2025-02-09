import './App.css'
import Navigation from './customer/components/Navigation/Navigation.jsx'
import HomePage from './customer/pages/HomePage.jsx'
import Footer from './customer/components/Footer/Footer.jsx'
import Product from './customer/components/Product/Product.jsx'
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx'
import Cart from './customer/components/Cart/Cart.jsx'
import Checkout from './customer/components/Checkout/Checkout.jsx'
import Order from './customer/components/Order/Order.jsx'
import OrderDetails from './customer/components/Order/OrderDetails.jsx'
import { Route, Routes } from 'react-router-dom'
import CustomerRouters from './Routes/CustomerRouters.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/*' element={<CustomerRouters/>}></Route>
    </Routes>

    {/* <HomePage></HomePage> */}
    {/* <Product></Product> */}
    {/* <ProductDetails></ProductDetails> */}
    {/* <Cart></Cart> */}
    {/* <Checkout></Checkout> */}
    {/* <Order></Order> */}
    {/* <OrderDetails></OrderDetails> */}

    </>
  )
}

export default App
