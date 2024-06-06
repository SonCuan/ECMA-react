import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import authSchema from "./schenmaVaild/authSchema";
import Button from "../components/Button";
import api from "./../axios/index";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = ({ isRegister }) => {
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
        if (isRegister) {
          await api.post(`/Register`, data);
          if (
            confirm(
              "Đăng ký thành công, bạn muốn chuyển đến trang đăng nhập ko?"
            )
          ) {
            nav("/login");
          }
          
        } else {
            const result = await api.post(`/login`, data);
            localStorage.setItem("user", JSON.stringify(result.data));
            if (
              confirm(
                "Bạn đã đăng nhập thành công, bạn có muốn chuyển đến trang chủ không?"
              )
            ) {
              nav("/admin");
            }
          }
        
      } catch (error) {
        alert(error?.response?.data);
      }
    })();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">{isRegister ? "Đăng ký" : "Đăng nhập"}</h1>
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
            {isRegister ? "Đăng ký " : "Đăng nhập"}
          </button>
          <Button>Đăng ký </Button>
          {isRegister && (
            <Link to="/Login">Đã có tài khoản, chuyển sang đăng nhập</Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
