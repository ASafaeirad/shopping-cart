import { FC } from "react";
import { ProductType } from "./../../Home/Home";
import { FaRegTimesCircle } from "react-icons/fa";
import { Wrapper } from "./cartItemStyles";
import { useCartStore } from "../../../stores/store";

interface Props {
  product: ProductType;
}

const CartItem: FC<Props> = (product) => {
  const { title, price, image, amount } = product.product;

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const removeCurrentProduct = useCartStore(
    (state) => state.removeCurrentProduct
  );

  return (
    <Wrapper>
      <div className="left_container">
        <button
          className="item__remove-btn"
          onClick={() => removeCurrentProduct(product.product)}
        >
          <FaRegTimesCircle />
        </button>

        <img
          src={`http://localhost:1337${image.url}`}
          alt={title}
          className="item__img-btn"
        />

        <span className="item__text">{title}</span>
      </div>

      <div className="right-container">
        <span className="item__text">{Math.floor(price * amount)}$</span>

        <div className="counter__btns">
          <button type="button" onClick={() => removeFromCart(product.product)}>
            -
          </button>
          <span className="item__text">{amount}</span>
          <button type="button" onClick={() => addToCart(product.product)}>
            +
          </button>
        </div>

        <span className="item__text">{price}$</span>
      </div>
    </Wrapper>
  );
};

export default CartItem;
