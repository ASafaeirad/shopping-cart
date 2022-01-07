import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/products";
import Input from "../../components/Input/Input";
import { isString, useFormik } from "formik";
import * as Yup from "yup";
import ReactLoading from "react-loading";

export interface loginUserType {
  identifier: string;
  password: string;
}

const Login = () => {
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        identifier: "",
        password: "",
      },

      validationSchema: Yup.object({
        identifier: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
      }),

      onSubmit: (user: loginUserType) => {
        mutate(user);
      },
    });

  const { mutate, data, isLoading } = useLogin(values);

  const navigate = useNavigate();

  const handleLoginUser = () => {
    if (!isString(data) && data != null) {
      localStorage.setItem("token", data.jwt);
      navigate("/");
    } else {
    }
  };

  useEffect(() => {
    handleLoginUser();
  }, [data]);

  return (
    <div className="form__container">
      <h2 className="form__title">Log in</h2>

      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form__item">
          <Input
            type="email"
            inputName="identifier"
            handleOnChange={handleChange}
            handleOnBlur={handleBlur}
            placeholder="example@mail.com"
            value={values.identifier}
          />
          {touched.identifier && errors.identifier && (
            <div className="error__message">{errors.identifier}</div>
          )}
        </div>

        <div className="form__item">
          <Input
            type="password"
            inputName="password"
            handleOnChange={handleChange}
            handleOnBlur={handleBlur}
            placeholder="at least 8"
            value={values.password}
          />
          {touched.password && errors.password && (
            <div className="error__message">{errors.password}</div>
          )}
        </div>

        <div className="form__checkbox">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>

        <button className="product-page__btn" type="submit">
          Log in
        </button>

        <NavLink to="/forgot-password" className="forgot__btn">
          Forgot Password
        </NavLink>

        <hr />

        <div className="have-account">
          Dont have an account?
          <br />
          <NavLink to="/register">Register</NavLink>
        </div>
      </form>

      {isLoading && (
        <ReactLoading
          type={"bars"}
          color={"#45486e"}
          width={175}
          className="loading"
        />
      )}
    </div>
  );
};

export default Login;
