import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import api from "./axios";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import AuthForm from "./pages/AuthForm";

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
    (async () => {
      try {
        const res = await api.post("/products", data);
        setProducts([...products, res.data]);
        if (confirm("Bạn đã thêm thành công, bạn có muốn quay lại trang chủ?")) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleEdit = (data) => {
    console.log(data);
    (async () => {
      try {
        const res = await api.patch(`/products/${data.id}`, data);
        const newData = await api.get("/products");
        setProducts(newData.data);

        if (
          confirm("Bạn đã sửa thành công, bạn có muốn quay lại trang admin?")
        ) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const hanldDelete = (id) => {
    (async () => {
      try {
        const idComfirm = confirm("Bạn có muốn xóa sản phầm này không?");
        if (idComfirm) {
          await api.delete(`/products/${id}`);
          setProducts(products.filter((product) => product.id !== id));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
      </header>
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home products={products} onDeletProduct={hanldDelete} />}
          />
          <Route
            path="/ProductAdd"
            element={<ProductAdd onAddProduct={handleSubmit} />}
          />
          <Route
            path="/ProductEdit/:id"
            element={<ProductEdit onAddProduct={handleEdit} />}
          />
           {/* <Route path="/Register" element={<Register/>} />
          <Route path="/login" element={<Login  />} /> */}
          <Route path="/Register" element={<AuthForm  isRegister/>} />
          <Route path="/login" element={<AuthForm  />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
