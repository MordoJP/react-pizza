import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from './globalStyles'
import Hero from './components/Hero'
import Products from './components/Products'
import { productData, productDataSecond } from './components/Products/data'
import Feature from './components/Feature'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
        <GlobalStyles />
        <Hero />
        <Products
            heading='Choose your Kirill'
            data={ productData }
        />
        <Feature />

        <Products
            heading='Now Kirill choses you'
            data={ productDataSecond }
        />
        <Footer />
    </Router>
  );
}

export default App;
