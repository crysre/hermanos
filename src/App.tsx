import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contactus } from "./components/Contactus"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Products } from "./components/Products"
import { Testimonials } from "./components/Testimonials"
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hermanos" element={<Hermanos />} />
      </Routes>
    </BrowserRouter>
  );
}

function Hermanos() {

  return (
   <div className="bg-neutral-900">
    <Nav/>
    <Hero/>
    <Products/>
    <Testimonials/>
    <Contactus/>
    <Footer/>
    <Analytics />
   </div>
  )
}

function Home() {
  return (
    <div className="bg-neutral-900 text-white p-10">
      <h1>Home Page</h1>
    </div>
  );
}


export default App
