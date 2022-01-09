import { FC } from "react";
import { ProductType } from "./../../Home";
import ProductTitle from "./../ProductTitle/ProductTitle";
import ProductPrice from "./../ProductPrice/ProductPrice";
import ProductOffTitle from "../ProductOffTitle/ProductOffTitle";
import NewPrice from "./../NewPrice/NewPrice";
import { Wrapper } from "./headerProductStyles";

interface Props {
  product: ProductType;
}

const HeaderProduct: FC<Props> = ({ product }) => {
  const { image, title, price, offProduct } = product;
  const addOffToPrice = offProduct * price;
  const currentPrice = Math.floor(addOffToPrice / 100);

  return (
    <Wrapper to="/products">
      <header className="product__header">
        <ProductTitle title={title} />
        <NewPrice text={currentPrice} />
      </header>
      <img src={`http://localhost:1337${image.url}`} alt={title} />
      <div className="product__footer">
        <ProductPrice text={price} />
        <ProductOffTitle title={offProduct} />
      </div>
    </Wrapper>
  );
};

export default HeaderProduct;
