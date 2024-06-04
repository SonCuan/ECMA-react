import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import authSchema from "./schenmaVaild/authSchema";
import Button from "../components/Button";
import api from "./../axios/index";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  });
  const onSubmit = (data) => {
    (async () => {
      try {
        const res = await api.post(`/register`, data);
        if(confirm("Bạn có muốn chuyển đến trang Login không?")){
          nav("/login");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">Đăng ký</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email?.message && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password?.message && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <button className="btn btn-primary w-100" type="submit">
            Đăng ký
          </button>
          <Button>Dang ky </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
