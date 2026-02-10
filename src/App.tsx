import { Contactus } from "./components/Contactus"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Products } from "./components/Products"
import { Testimonials } from "./components/Testimonials"

function App() {

  return (
   <div className="bg-neutral-900">
    <Nav/>
    <Hero/>
    <Products/>
    <Testimonials/>
    <Contactus/>
    <Footer/>
   </div>
  )
}

export default App
