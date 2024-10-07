import React from "react";
import './Cart.css';

const products = [
  {
    id: 1,
    name: "Blue denim shirt",
    color: "blue",
    size: "M",
    price: 17.99,
    image: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
  },
  {
    id: 2,
    name: "Red hoodie",
    color: "red",
    size: "M",
    price: 17.99,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp",
  },
];

export default function Cart() {
  const totalAmount = products.reduce((total, product) => total + product.price, 0);

  return (
    <section className="payment-section">
      <div className="payment-container">
        <h5>Cart - {products.length} items</h5>

        {products.map((product) => (
          <div key={product.id} className="product-card">

            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <p><strong>{product.name}</strong></p>
              <p>Color: {product.color}</p>
              <p>Size: {product.size}</p>
              <div className="quantity-controls">
                <button>-</button>
                <input type="number" defaultValue={1} min={0} style={{ width: '50px', margin: '0 10px' }} />
                <button>+</button>
              </div>
              <p style={{ textAlign: 'right' }}><strong>${product.price.toFixed(2)}</strong></p>
            </div>
          </div>
        ))}

        <hr />
        <div style={{ marginBottom: '20px' }}>
          <strong>Expected shipping delivery:</strong>
          <p>12.10.2020 - 14.10.2020</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <strong>We accept:</strong>
          <p>[Payment methods here]</p>
        </div>

        <div className="summary">
          <h5>Summary</h5>
          <div className="summary-item">
            <span>Products</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Shipping</span>
            <span>Gratis</span>
          </div>
          <div className="summary-item" style={{ borderTop: '1px solid #dee2e6', marginTop: '10px' }}>
            <strong>Total amount (including VAT)</strong>
            <strong>${totalAmount.toFixed(2)}</strong>
          </div>
          <button className="checkout-button">
            Go to checkout
          </button>
        </div>
      </div>
    </section>
  );
}
