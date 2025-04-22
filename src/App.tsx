import AboutUs from "./components/AboutUs"
import Feature from "./components/Feature"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />

      <Home />

      <AboutUs />

      <Feature />
    </div>
  )
}

export default App