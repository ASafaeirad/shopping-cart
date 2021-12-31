import { client } from ".";
import { ProductType } from "./../containers/Home/Home";

const getProducts = (): Promise<ProductType[] | string> =>
  client
    .get("/products")
    .then((res) => res.data)
    .catch(() => "Something went wrong....");

const getProduct = async (
  id: string | undefined
): Promise<ProductType | string> =>
  client
    .get(`/products/${id}`)
    .then((res) => res.data)
    .catch(() => "Something went wrong...."); 

export { getProducts, getProduct };
