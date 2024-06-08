import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import productSchema from "./schenmaVaild/productSchema";
import api from "../axios";

const ProductForm = ({ onAddProduct }) => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const { id } = useParams();
  const onSubmit = (data) => {
    console.log(data);
    onAddProduct({ ...data, id });
  };
  if (id) {
    useEffect(() => {
      (async () => {
        try {
          const { data } = await api.get(`/products/${id}`);
          reset(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
  }
  return (
    <div>
      <form onSubmit={handleSubmit((data) => onAddProduct({ ...data, id }))}>
        <fieldset>
          <legend>{id ? "Sua san pham" : " Them san pham"}</legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              {" "}
              Tieu de{" "}
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              id="disabledTextInput"
              className="form-control"
            />
            {errors.title?.message && (
              <p className="text-danger">{errors.title?.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextNumber" className="form-label">
              {" "}
              Gia{" "}
            </label>
            <input
              type="number"
              {...register("price", { required: true, valueAsNumber: true })}
              id="disabledTextNumber"
              className="form-control"
            />
            {errors.price?.message && (
              <p className="text-danger">{errors.price?.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextDescrip" className="form-label">
              {" "}
              Descrip{" "}
            </label>
            <input
              type="text"
              {...register("description", { required: true })}
              id="disabledTextDescrip"
              className="form-control"
            />
            {errors.description?.message && (
              <p className="text-danger">{errors.description?.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-danger w-100">
            {id ? "Sua san pham" : " Them san pham"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ProductForm;
