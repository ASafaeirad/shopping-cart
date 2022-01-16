import { useCartStore } from "../../stores/store";
import { CartHeader, Wrapper, CurrentDataTitle } from "./cartStyles";
import CartItem from "./components/CartItem";
import { Container } from "react-bootstrap";

const Cart = () => {
  const cartProducts = useCartStore((state) => state.cartProducts);

  return (
    <Container>
      {cartProducts.length !== 0 ? (
        <>
          <CartHeader>
            <div className="header-left__title">
              <span>PRODUCT</span>
            </div>
            <div className="header-right__title">
              <span>PRICE</span>

              <span>QTY</span>

              <span>UNIT PRICE</span>
            </div>
          </CartHeader>
          <Wrapper>
            {cartProducts?.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </Wrapper>
        </>
      ) : (
        <CurrentDataTitle>No Current Data...</CurrentDataTitle>
      )}
    </Container>
  );
};

export default Cart;
