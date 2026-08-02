import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginSchema from "../../schemas/loginSchema";
import { supabase } from "../../services/supabase";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const { login } = useAuth();
  const onSubmit = async (data) => {
    const { data: userData, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    login(userData.user);

    navigate("/dashboard");
  };

  return (
    <section className="auth-wrapper">
      <div className="container">
        <div className="card">
          <div className="auth-header">
            <div className="auth-logo">D</div>
            <h1>Welcome Back</h1>
            <p>Sign in to continue</p>
          </div>

          <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="label" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="example@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="error">{errors.email.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="label" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="Enter Your Password.."
                {...register("password")}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account?</p>
            <Link to="/register" className="link">Create one</Link>
          </div>
        </div>
      </div>
    </section>
  );
}