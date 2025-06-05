import React from "react";
// import "src/pro.css";
function ProductList({ addToCart, products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="content">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p className="price">${product.price}</p>
            <button onClick={() => addToCart(product)} className="btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
