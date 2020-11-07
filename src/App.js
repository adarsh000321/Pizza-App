import React from "react";
import Hero from "./components/Hero";
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "./globalStyles";
import Product from "./components/Product";
import Feature from "./components/Feature";
import {productData, productDataTwo} from "./components/Product/data";
import Footer from "./components/Footer";

const App = ()=>{
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Hero />
            <Product heading = "Choose your favourite" data = {productData}/>
            <Feature />
            <Product heading = "Sweet Treats for You" data = {productDataTwo}/>
            <Footer />
        </BrowserRouter>
    )
}

export default App;