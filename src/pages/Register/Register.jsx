import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import RegitserSchema from "../../schemas/RegisterSchema";
import { supabase } from "../../services/supabase";

export default function Register() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(RegitserSchema),
  });

  const onSubmit = async (data) => {
    const { data: userData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully");
    console.log(userData);
    reset();
  };

  return (
    <section className="auth-wrapper">
      <div className="container">
        <div className="card">
          <div className="auth-header">
            <div className="auth-logo">D</div>
            <h1>Create Account</h1>
            <p>Join us today</p>
          </div>

          <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="example@gmail.com"
                {...register("email")}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <label className="label" htmlFor="password">
                Password
              </label>
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

            <div className="form-group">
              <label className="label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="input"
                placeholder="Enter Your confirmPassword.."
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account?</p>
            <Link to="/" className="link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
