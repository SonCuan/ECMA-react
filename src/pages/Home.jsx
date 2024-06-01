import React from "react";
import { Link } from "react-router-dom";

const Home = ({ products }) => {
  return (
    <>
         <div className="row" >
					{products.map((item) => (
						<div className="col-12  col-lg-2 card p-2 m-3 item" key={item.id}>
							<div>
								<Link to={`/product-detail/${item.id}`} ><img src={item.thumbnail} alt={item.title} width="100%" height="200px" /></Link>
							</div>
							<div className="content">
								<Link to={`/product-detail/${item.id}`}><p>{item.title}</p></Link>
								<Link to ={`/product-detail/${item.id}`}><p>Gia: {item.price}</p></Link>
                <p>Danh muc: {item.category}</p>
								<Link to={`/product-detail/${item.id}`} ><button className="btn btn-primary">Xem chi tiet</button></Link>
							</div>
						</div>
					))}
				</div>
    </>
  );
};

export default Home;
