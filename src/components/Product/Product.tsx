import React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ProductType } from "../../containers/Home/Home";

interface Props {
  product: ProductType;
}

const Product: FC<Props> = ({ product }) => {
  const { id, title, content, price, image } = product;
  return (
    <article className="product">
      <NavLink to={`/products/${id}`}>
        <img
          src={`http://localhost:1337${image.url}`}
          className="product__image"
          alt={title}
        />
      </NavLink>

      <div>
        <p className="product__desc">{content}</p>

        <div className="product__title">
          <span className="product__price">{price}$</span>
          <NavLink to="/products" className="product__btn">
            {title}
          </NavLink>
        </div>
      </div>
    </article>
  );
};

export default Product;
