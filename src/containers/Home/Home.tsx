import { isString } from "formik";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useProducts } from "../../api/hooks";
import MainLayout from "../../components/MainLayout";
import Product from "../../components/Product/Product";
import FilterBtns from "./components/FilterBtns/FilterBtns";
import Header from "./components/Header/Header";
import HeaderProduct from "./components/HeaderProduct/HeaderProduct";
import Title from "./components/Title/Title";
import { Main, ProductsList } from "./homeStyles";

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
  if (isError) return <p>{isError}</p>;

  if (isLoading || isString(data)) return <p>Is Loading....</p>;

  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default Home;
