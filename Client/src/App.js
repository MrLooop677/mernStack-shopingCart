import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Products } from "./components/products/Products";
import { words } from "./words";
import data from "./data.json";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
function App() {
  const [productData, setProductData] = useState(data);
  const [size, setSize] = useState("");
  const [order, setOrder] = useState("");
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
  return (
    <div className="layOut">
      <Header />
      <main>
        <div className="wrapper">
          <Products productData={productData} />
          <Filter
            size={size}
            order={order}
            HandleByOrder={HandleByOrder}
            HandleBySize={HandleBySize}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
