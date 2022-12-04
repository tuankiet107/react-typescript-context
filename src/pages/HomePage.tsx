import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { CartContext, ProductProps } from "../contexts/CartProvider";

import Avocado from "../assets/avocado.jpg";
import Banana from "../assets/banana.jpg";
import Tomato from "../assets/tomato.jpg";

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Banana",
      price: 10,
      imgUrl: Banana,
    },
    {
      id: 2,
      name: "Avocado",
      price: 6,
      imgUrl: Avocado,
    },
    {
      id: 3,
      name: "Tomato",
      price: 4,
      imgUrl: Tomato,
    },
  ]);

  return (
    <CartContext.Consumer>
      {(context) => (
        <div className="products-list d-flex">
          {products.map((item: ProductProps) => {
            return (
              <Card className="product-item" key={item.id}>
                <Card.Img variant="top" src={item.imgUrl} />
                <Card.Body>
                  <Card.Title>
                    <div className="name-product">
                      {item.name}
                    </div>
                    <div className="price-product">
                      {item.price}.000 vnđ
                    </div>
                  </Card.Title>
                  <Button
                    variant="primary"
                    onClick={context.addProductToCart.bind(this, item)}
                  >
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </CartContext.Consumer>
  );
};

export default Home;
