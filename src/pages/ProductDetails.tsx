import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const product = products.find((p) => p.id === id);

  const [count, setCount] = useState(0);
  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };
  const increaseCount = () => {
    setCount(count + 1);
  };

  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <div className="w-3/4 mx-auto">
      <div>
        <img src={product.imageurl} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.gender}</p>
        <p>{product.price}</p>
        {product.material && <p>Material: {product.material}</p>}
        {product.tipShaped && <p>Tip Shape: {product.tipShaped}</p>}
      </div>

      {/* for choosing items quantity */}

      <div className="flex space-x-6  text-4xl ">
        <FaMinus onClick={decreaseCount} className="border border-b  " />
        <p className="border border-b">{count}</p>
        <FaPlus onClick={increaseCount} className="border border-b" />
      </div>
    </div>
  );
}
