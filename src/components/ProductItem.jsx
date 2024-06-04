import React from 'react';
import Button from "./Button";
import { Link } from 'react-router-dom';
import s from './ProductItem.module.scss';

const ProductItem = ({data} ) => {
  return (
    
    <div className="col-12  col-lg-2 card p-2 m-3 item" key={data.id}>
    <div>
        <Link to={`/product-detail/${data.id}`} ><img src={data.thumbnail} alt={data.title} width="100%" height="200px" /></Link>
    </div>
    <div className={s.content}>
        <Link to={`/product-detail/${data.id}`}><p>{data.title}</p></Link>
        <Link to ={`/product-detail/${data.id}`}><p>Gia: {data.price}</p></Link>
        <p>Danh muc: {data.category}</p>
        <Link to={`/product-detail/${data.id}`} ><Button>Xem chi tiet</Button></Link>
    </div>
</div>
  )
}

export default ProductItem;
