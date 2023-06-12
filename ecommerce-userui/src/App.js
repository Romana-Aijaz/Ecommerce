import "./App.css";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Comment from "./pages/Comment";
import ProductList from "./pages/ProductList";
import Pay from "./pages/Pay";
import Calendar from "./pages/Calendar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Gig from "./pages/Gig";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector(state => state.cart)
  console.log("cart: ", cart)
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/pay" element={<Pay />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/register"element={user ? <Navigate to="/"/> : <Register />}/>
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/productList/:category" element={<ProductList />} />
      </Routes>
      <Routes>
        <Route path="/gig" element={<Gig />} />
      </Routes>
      <Routes>
        <Route path="/comment" element={<Comment />} />
      </Routes>
     
    </Router>
  );
}

export default App;