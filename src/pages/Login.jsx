import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import authSchema from "./schenmaVaild/authSchema";
import Button from "../components/Button";
import api from "./../axios/index";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
         await api.post(`/Login`, data);
        if(confirm("Bạn đã đăng nhập thành công, b có muốn chuyển đến trang chủ không?")){
          nav("/admin");
        }
      } catch (error) {
        alert(error?.response?.data);
      }
    })();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">Đăng nhập</h1>
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
            Đăng nhập
          </button>
          <Button>Đăng ký </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
