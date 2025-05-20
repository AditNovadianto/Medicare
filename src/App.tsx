import AboutUs from "./components/AboutUs"
import Clients from "./components/Clients"
import Feature from "./components/Feature"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Products from "./components/Products"

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />

      <Home />

      <AboutUs />

      <Feature />

      <Products />

      <Clients />
    </div>
  )
}

export default App