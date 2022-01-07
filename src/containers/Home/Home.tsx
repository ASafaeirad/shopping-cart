import React from "react";
import { useProducts } from "../../hooks/products";
import Product from "../../components/Product/Product";
import { isString } from "formik";
import Header from './components/Header/Header';

export interface ProductType {
  id: number;
  title: string;
  content: string;
  price: number;
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
    <>
    <Header />
    <main>
      <section className="products">
        {data?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </main>
    </>
  );
};

export default Home;
