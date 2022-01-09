import { FC } from "react";
import { Col } from "react-bootstrap";
import { ProductType } from "../../containers/Home/Home";
import ProductTitle from "./../../containers/Home/components/ProductTitle/ProductTitle";
import NewPrice from "./../../containers/Home/components/NewPrice/NewPrice";
import ProductPrice from "./../../containers/Home/components/ProductPrice/ProductPrice";
import ProductOffTitle from "./../../containers/Home/components/ProductOffTitle/ProductOffTitle";
import { ProductImgLink, Wrapper } from "./ProductStyles";
import StarGray from "../../svg/Star-gray.svg";
import StarGold from "../../svg/Star-gold.svg";
interface Props {
  product: ProductType;
}

const Product: FC<Props> = ({ product }) => {
  const { id, title, content, price, image, offProduct } = product;
  const addOffToPrice = offProduct * price;
  const currentPrice = Math.floor(addOffToPrice / 100);

  return (
    <Col xs="12" sm="6" md="4" lg="3">
      <Wrapper className="product">
        <ProductImgLink to={`/products/${id}`}>
          <img
            src={`http://localhost:1337${image.url}`}
            className="product__image"
            alt={title}
          />
        </ProductImgLink>

        <footer>
          <ProductTitle title={title} />

          <div className="stars">
            <img src={StarGold} alt="Star" />
            <img src={StarGold} alt="Star" />
            <img src={StarGold} alt="Star" />
            <img src={StarGold} alt="Star" />
            <img src={StarGray} alt="Star" />
          </div>
          <div className="footer__product">
            <NewPrice text={currentPrice} />
            <div>
              <ProductPrice text={price} />
              <ProductOffTitle title={offProduct} />
            </div>
          </div>
        </footer>
      </Wrapper>
    </Col>
  );
};

export default Product;
