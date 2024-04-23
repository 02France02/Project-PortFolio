import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Navbar from "../Components/Navbar";
import Jewelery from "../Pages/Jewelery";
import Electronic from "../Pages/Electronic";
import Clothing from "../Pages/Clothing";
import Profile from "../Pages/Profile";
import Cart from "../Pages/Cart";
import Footer from "../Components/Footer";
import ContactUs from "../Pages/ContactUs";
import Settings from "../Pages/Settings";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Product from "../Components/Product"
function Root() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/jewelery" element={<Jewelery />}></Route>
          <Route path="/electronic" element={<Electronic/>}></Route>
          <Route path="/clothing" element={<Clothing/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/product/:name" element={<Product/>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default Root;
