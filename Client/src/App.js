import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Products } from "./components/products/Products";
import { words } from "./words";
import data from "./data.json";
import { useState } from "react";
function App() {
  const [productData, setProductData] = useState(data);
  console.log(productData);
  return (
    <div className="layOut">
      <Header />
      <main>
        <div className="wrapper">
          <Products productData={productData} />
          <div className="filter-wrapper">filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
