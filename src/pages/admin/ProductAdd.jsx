import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


const productSchema = z.object({
  title : z.string ().min(6 ).max(50),
  price : z.number ().min(0),
  description : z.string ().min(0 ).max(50).optional(),
})


const ProductAdd = ({onAddProduct}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(productSchema),
      });
      const onSubmit  = (data) => {
        console.log(data);
         onAddProduct(data);}
        
    
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
  <fieldset>
    <legend>Them san pham</legend>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label"> Tieu de </label>
      <input type="text" {...register("title" ,{required: true})} id='disabledTextInput' className="form-control" placeholder="Tieu de cua san pham"/> 
      {errors.title?.message && <p className='text-danger'>{errors.title?.message}</p>}
    </div>
    <div className="mb-3">
      <label htmlFor="disabledTextNumber" className="form-label"> Gia </label>
      <input type="number" {...register("price",{required: true , valueAsNumber: true})} id='disabledTextNumber' className="form-control" placeholder="Gia cua san pham"/>
      {errors.price?.message && <p className='text-danger'>{errors.price?.message}</p>}
    </div>
    <div className="mb-3">
      <label htmlFor="disabledTextDescrip" className="form-label"> Descrip </label>
      <input type="text" {...register("description",{required: true})}  id='disabledTextDescrip' className="form-control" placeholder="Mo to cua san pham"/>
      {errors.description?.message && <p className='text-danger'>{errors.description?.message}</p>}
    </div>
  
    
    <button type="submit" className="btn btn-primary w-100">Add</button>
  </fieldset>
</form>
    </div>
  )
}

export default ProductAdd;
