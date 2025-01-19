import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import About from './components/pages/About/About';
import Footer from './components/footer/Footer';
import Deals from "./components/pages/home/Products/Deals";
import Cart from "./components/pages/cart/Cart";

// Context for cart count
export const Context = React.createContext();

function App() {
  const [cartCount, setCartCount] = useState(0);
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (email) {
     
      // Fetch user data by email and update cart count
      axios.get(`https://json-server-sik9.onrender.com/userDB?email=${email}`)
        .then((response) => {
          if (response.data.length > 0) {
            const user = response.data[0]; // Assuming unique email
            setCartCount(user.cart ? user.cart.length : 0);
          } else {
            console.warn("User not found");
          }
        })
        .catch(err => console.error("Error fetching user data:", err));
    } else {
      setCartCount(0); // Reset cart count for logged-out users
    }
  }, [email]);

  return (
    <div>
      <Context.Provider value={[cartCount, setCartCount]}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Deals" element={<Deals />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
