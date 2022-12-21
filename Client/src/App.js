import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Products } from "./components/products/Products";
import { words } from "./words";
import data from "./data.json";
import { useState, useEffect } from "react";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
function App() {
  const [productData, setProductData] = useState(data);
  const [size, setSize] = useState("");
  const [order, setOrder] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItem")) || []
  );
  const HandleBySize = (e) => {
    setSize(e.target.value);
    const productClone = [...data];
    const filteredSize = productClone.filter(
      (pr) => pr.size.indexOf(e.target.value) != -1
    );

    e.target.value == "ALL"
      ? setProductData(data)
      : setProductData(filteredSize);
  };
  const HandleByOrder = (e) => {
    const order = e.target.value;
    console.log(order);
    setOrder(order);
    const productClone = [...productData];
    let productSorted = productClone.sort((a, b) => {
      switch (order) {
        case "latest":
          return a.id < b.id ? 1 : -1;
        case "lowest":
          return a.price - b.price;
        case "highest":
          return b.price - a.price;
      }
    });
    console.log(productSorted);
    setProductData(productSorted);
  };
  const addToCart = (product) => {
    const productClone = [...cart];
    let isProductExist = false;
    productClone.map((p) => {
      if (p.id === product.id) {
        isProductExist = true;
        p.qty++;
      }
    });
    if (!isProductExist) {
      productClone.push({ ...product, qty: 1 });
    }
    setCart(productClone);
  };
  const removeFromCart = (product) => {
    const productClone = [...cart];
    setCart(productClone.filter((p) => p.id !== product.id));
  };
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="layOut">
      <Header />
      <main>
        <div className="wrapper">
          <Products productData={productData} addToCart={addToCart} />
          <Filter
            size={size}
            order={order}
            HandleByOrder={HandleByOrder}
            HandleBySize={HandleBySize}
            productNumber={productData.length}
          />
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
