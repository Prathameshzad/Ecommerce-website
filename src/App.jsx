import './App.css'
import Navigation from './customer/components/Navigation/Navigation.jsx'
import HomePage from './customer/pages/HomePage.jsx'
import Footer from './customer/components/Footer/Footer.jsx'
import Product from './customer/components/Product/Product.jsx'
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx'

function App() {

  return (
    <>
    <Navigation></Navigation>
    {/* <HomePage></HomePage> */}
    {/* <Product></Product> */}
    <ProductDetails></ProductDetails>
    <Footer></Footer>
    </>
  )
}

export default App
