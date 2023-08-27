import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./Components/SingleProduct";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header  from "./Components/Header";
import styled from "styled-components";
import About from "./About";
import Footer from "./Components/Footer";
import Cart from './Cart';
import Error from "./Error";


const App = () => {

  const theme={
    colors:{
      heading:"#673AB7",
      bg:"rgb(228 225 232)",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 243",
      border:"rgba(98,84,243,0.5",
      hr:"#ffffff",
      gradient:
        "linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
      "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",

    },
    media:{
      mobile:"768px",
      tab:"998px",
    }
  };
  return (
    <>
        <ThemeProvider theme={theme}>
         <Router>
            <GlobalStyle/>
              <Header/>
              <Routes>
                <Route  exact path="/"  element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/contact"  element={<Contact/>}/>
                <Route exact path="/product" element={<Products/>}/>
                <Route exact path="/singleproduct/:id" element={<SingleProduct/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
                <Route exact path="*" element={<Error/>}/>
              </Routes>
          </Router>
          <Footer/>
        </ThemeProvider>
    </>
  );
};

export default App;
