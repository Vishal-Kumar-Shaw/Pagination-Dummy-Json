import { useEffect, useState } from "react";
import Pagination from "./Components/Pagination";
import { ProductCard } from "./Components/ProductCard";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();
    const products = json.products;
    setProducts(products);
    setTotalProducts(products.length);
  };

  useEffect(() => {
    fetchData();
    console.log(products);
  }, []);

  return (
    <div className="App">
      <h1>ViKart</h1>
      <Pagination
        totalProducts={totalProducts}
        setStart={setStart}
        setEnd={setEnd}
      />
      <div className="products-container">
        {products.slice(start, end).map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.images[0]}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}
