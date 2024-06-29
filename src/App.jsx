import './App.css'
import Navigation from './customer/components/Navigation/Navigation.jsx'
import HomePage from './customer/pages/HomePage.jsx'
import Footer from './customer/components/Footer/Footer.jsx'
import Product from './customer/components/Product/Product.jsx'

function App() {

  return (
    <>
    <Navigation></Navigation>
    {/* <HomePage></HomePage> */}
    <Product></Product>
    <Footer></Footer>
    </>
  )
}

export default App
