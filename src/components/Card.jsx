import { useEffect, useState } from "react";

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-60 object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {product.title}
              <span className="badge badge-secondary">${product.price}</span>
            </h2>

            <p>{product.description}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
