import { useProducts } from "../../hooks/products";
import Product from "../../components/Product/Product";
import { isString } from "formik";
import Header from "./components/Header/Header";
import HeaderProduct from "./components/HeaderProduct/HeaderProduct";
import { Main, ProductsList } from "./homeStyles";
import Title from "./components/Title/Title";
import FilterBtns from "./components/FilterBtns/FilterBtns";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

export interface ProductType {
  id: number;
  title: string;
  content: string;
  price: number;
  offProduct: number;
  image: {
    url: string;
  };
  amount: number;
}

const Home = () => {
  const { data, isLoading, isError } = useProducts();
  const [products, setProducts] = useState(data);
  if (isError) return <p>{isError}</p>;

  if (isLoading || isString(data)) return <p>Is Loading....</p>;

  return (
    <>
      <Header />

      <Main>
        <section>
          <div className="container">
            <div className="header__products">
              {data?.slice(0, 3).map((item) => (
                <HeaderProduct key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>

        <ProductsList>
          <Container>
            <Title title="BEST SELLER" />
            <FilterBtns />
            <Row>
              {data?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </Row>
          </Container>
        </ProductsList>
      </Main>
    </>
  );
};

export default Home;
