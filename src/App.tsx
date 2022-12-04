import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Cart from "./pages/CartPage";
import Home from "./pages/HomePage";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
