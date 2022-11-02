import React from "react";

function BestSellers({ data }) {
  return (
    <div id="best-sellers">
      <h1 className="heading">Best Sellers</h1>
      <ul id="products-list">
        {data?.length > 0 ? (
          data.map((prod) => (
            <li className="product-card" key={prod.productId}>
              <div className="product-image">
                <img src={prod.productImage} alt={prod.productName} />
              </div>
              <div className="product-info">
                <h2 className="product-name">{prod.productName}</h2>
                <p className="company-name">{prod.company}</p>
                <p className="product-price">${prod.productPrice}</p>
              </div>
            </li>
          ))
        ) : (
          <center>
            <li>No procuts to view.</li>
          </center>
        )}
      </ul>
    </div>
  );
}

export default BestSellers;
