import { useContext } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { CartContext, ProductsInCart } from "../contexts/CartProvider";
import CartIcon from "../assets/shopping-cart.png";

const NavbarComponent = () => {
  const stateCart = useContext(CartContext);

  return (
    <div className="header">
      <Nav>
        <Nav.Item>
          <Nav.Link to="/" as={Link}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/cart" as={Link}>
            Cart
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="mini-cart">
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            <img src={CartIcon} alt="" />
            <span className="total-numb">{stateCart.qtyProducts || 0}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {stateCart.cart?.map((item: ProductsInCart) => {
              return (
                <div className="cart-item d-flex" key={item.id}>
                  <div className="cart-item-info">
                    <span>{item.name}</span>
                    <div>{item.qty} x {item.price}.000 vnđ</div>
                  </div>
                  <div className="action">
                    <button onClick={stateCart.removeProductFromCart.bind(this, item)}>Remove</button>
                  </div>
                </div>
              );
            })}
            <div className="total-price">
              <span>Total: {stateCart.total | 0}.000 vnđ</span>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavbarComponent;
