import React from "react";

import ProductItem from "../components/ProductItem";

const Home = ({ products }) => {
  return (
    <>
		<h1>Danh sach san pham</h1>
         <div className="row" >
					{products.map((item) => (
						
							<ProductItem data={item} />

						
					))}
				</div>
    </>
  );
};

export default Home;
