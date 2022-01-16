import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../api/hooks";
import { isString } from "formik";
import { useCartStore } from "../../stores/store";

const ProductPage = () => {
  let { id } = useParams();

  const { data } = useProduct(id);

  const addToCart = useCartStore((state) => state.addToCart);

  if (data === null || isString(data) || data === undefined)
    return <p>Loading....</p>;
  const { title, content, price, image } = data;

  return (
    <article className="product__page">
      <div>
        <img
          src={`http://localhost:1337${image.url}`}
          className="product__image"
          alt={title}
        />
      </div>

      <div>
        <p className="product__desc">{content}</p>

        <div className="product__title">
          <span className="product__price">{price}$</span>
          <span className="product__btn">{title}</span>
        </div>

        <button className="product-page__btn" onClick={() => addToCart(data)}>
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ProductPage;
