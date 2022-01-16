import { isString, useFormik } from "formik";
import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { Link, NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import type { LoginBody } from "../../api/useLogin";
import { useLogin } from "../../api/useLogin";
import Input from "../../components/Input/Input";
import { useAuthStore } from "../../stores/store";
import { decodedToken } from "../../utils/decoded";

const LoginPage: React.FC = () => {
  const loginStore = useAuthStore((state) => state.login);
  const {
    handleBlur,
    handleReset,
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
  } = useFormik<LoginBody>({
    initialValues: {
      identifier: "",
      password: "",
    },

    validationSchema: Yup.object({
      identifier: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (user) => {
      login(user)
        .then((data) => {
          localStorage.setItem("token", data.jwt);
          navigate("/");
        })
        .catch(() => {});
    },
  });

  const { mutateAsync: login, isLoading } = useLogin();

  const navigate = useNavigate();

  return (
    <div>
      <h2>Log in</h2>

      <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className="form__item">
          <Input
            type="text"
            name="identifier"
            label="Email"
            onChange={handleChange}
            onBlur={handleBlur}
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
            name="password"
            label="Password"
            onChange={handleChange}
            onBlur={handleBlur}
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

        <Link to="/forgot-password" className="forgot__btn">
          Forgot Password
        </Link>

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

export default LoginPage;
