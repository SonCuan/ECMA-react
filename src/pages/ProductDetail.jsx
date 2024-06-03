import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Chi tiet san pham</h1>
      <div className="row">
        <div className="col-6">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="col-6">
          <h2>{product.title}</h2>
          <p>{product.price}$</p>
          <p>Mo ta : {product.description}</p>
          <p>{product.discountPercentage}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
