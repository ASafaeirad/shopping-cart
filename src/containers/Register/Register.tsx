import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/products";
import Input from "../../components/Input/Input";
import ReactLoading from "react-loading";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface RegisterUserType {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Required"),
        email: Yup.string().email("Email is invalid").required("Required"),
        password: Yup.string()
          .min(8, "At Least 8 Characters")
          .max(12, "Maximum 8 Characters")
          .required("Required"),
      }),
      onSubmit: (user: RegisterUserType) => {
        mutate(user);
      },
    });

  const navigate = useNavigate();
  const { mutate, data, isLoading } = useRegister(values);

  const handleRegisterUser = () => {
    if (data !== undefined) {
      navigate("/login");
    } else {
    }
  };

  useEffect(() => {
    handleRegisterUser();
  }, [data]);

  return (
    <>
      <div className="form__container">
        <h2 className="form__title">Register</h2>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form__item">
            <Input
              type="text"
              inputName="username"
              handleOnChange={handleChange}
              handleOnBlur={handleBlur}
              placeholder="User Name"
              value={values.username}
            />

            {touched.username && errors.username && (
              <div className="error__message">{errors.username}</div>
            )}
          </div>
          <div className="form__item">
            <Input
              type="email"
              inputName="email"
              handleOnChange={handleChange}
              handleOnBlur={handleBlur}
              placeholder="example@mail.com"
              value={values.email}
            />
            {touched.email && errors.email && (
              <div className="error__message">{errors.email}</div>
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
            Register
          </button>

          <hr />

          <div className="have-account">
            Already have an account
            <br />
            <NavLink to="/register">Login</NavLink>
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
      )
    </>
  );
};

export default Register;
