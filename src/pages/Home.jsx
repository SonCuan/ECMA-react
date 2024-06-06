import React from "react";
import { Link } from "react-router-dom";


const Home = ({ products , onDeletProduct}) => {
  return (
    <>
      <Link to="/admin/productAdd" className="btn btn-primary">
        + Tạo thêm sản phẩm
      </Link>
      <h1>Danh sach san pham</h1>
      <table className="table table-striped table-bordered " style={{ marginBottom: "50px" }}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col"> Mo ta</th>
            <th scope="col">Thumbmail</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.price}$</td>
              <td>{item.description}</td>
              <td>
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    width={"100px"}
                    height={"100px"}
                    title={item.title}
                  />
                ) : (
                  "No thumbnail"
                )}
              </td>
              <td>
                <Link to ={`/admin/productForm/${item.id}`}><button type="button" className="btn btn-warning" >
                  Sửa
                </button>
                </Link>
                <button type="button" onClick={()=> onDeletProduct(item.id)} className="btn btn-danger">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
