import { httpClient } from "./client";
import { ProductType } from "../containers/Home/Home";

const getProducts = (): Promise<ProductType[] | string> =>
  httpClient
    .get("/products")
    .then((res) => res.data)
    .catch(() => "Something went wrong....");

const getProduct = async (
  id: string | undefined
): Promise<ProductType | string> =>
  httpClient
    .get(`/products/${id}`)
    .then((res) => res.data)
    .catch(() => "Something went wrong....");

export { getProducts, getProduct };
