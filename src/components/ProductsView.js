import React, { Component } from "react";

class ProductsView extends Component {
  render() {
    const { prod, onClick, leftVal } = this.props;
    return (
      <div className="favs" style={{ left: leftVal }}>
        <img
          className="favs-image"
          src={prod.image}
          onClick={() => {
            onClick(prod);
          }}
          alt="img"
        />
        <div className="order-desc">
          <div className="order-subdesc">
            <p className="desc-text">{prod.name}</p>
            <p className="desc-text">{prod.price}</p>
          </div>
          <div className="order-button-container">
            <button className="order-button" type="button">
              Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsView;
