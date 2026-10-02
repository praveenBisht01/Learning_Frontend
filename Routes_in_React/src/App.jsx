import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import { Route , Routes} from 'react-router-dom'
import About from './components/pages/About'
import Contect from './components/pages/Contect'
import Product from './components/pages/Product'
import NotFound from './components/pages/NotFound'

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contect" element={<Contect />} />
        <Route path="/product" element={<Product />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App
