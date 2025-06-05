import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { PRODUCTS } from "./data/products";
import "./pro.css";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  const filteredProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Router>
      <header>
        <div className="container top1" >
          <Link to="/" className="logo">
            <img src="https://via.placeholder.com/40" alt="Store Logo" /> ReactShop
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <nav >
            <Link to="/cart">Cart ({cart.length})</Link>
            {user ? (
              <Link to="/profile">Hello, {user}</Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} products={filteredProducts} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
