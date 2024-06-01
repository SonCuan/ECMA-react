import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {  Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Blog from "./pages/Blog";
import DashBoard from "./pages/admin/DashBoard";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import api from "./axios";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
		(async () => {
			try {
				const { data } = await api.get("/products");
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);


// Phan gui submit
const handleSubmit = (data) => {
  console.log(data);
  (async () => {
    try {
      const res = await api.post("/products", data);
      setProducts([...products, res.data]);
      if (confirm("Add succefully, redirect to admin page?")) {
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  })();
};



  return (
    <div>
      <Header />
      <main className="container">
    

        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<DashBoard products={products} />} />
          <Route path="/ProductAdd" element={<ProductAdd  onAddProduct={handleSubmit} />} />
          <Route path="*" element={<NotFound />} />      
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
