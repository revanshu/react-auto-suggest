import React, { Component } from "react";
import ProductsView from "../components/ProductsView";
import productServices from "../utils/getProducts";

class MainApp extends Component {
  state = {
    products: [],
    activeIndex: 1,
    selectedCat: "",
    input: ""
  };

  componentDidMount() {
    let data = productServices.getProducts();
    this.setState({ products: data });
    this.data = data;
    console.log("products list", data);
  }

  moveLeft() {
    const { products, activeIndex } = this.state;
    if (activeIndex === 1) return;

    for (let i = 0; i < products.length; i++) {
      products[i].left += 200;
    }

    this.setState({ products, activeIndex: activeIndex - 1 });
    console.log("left");
  }

  moveRight() {
    const { products, activeIndex } = this.state;
    if (activeIndex + 2 === products.length) return;
    for (let i = 0; i < products.length; i++) {
      products[i].left -= 200;
    }

    this.setState({ products, activeIndex: activeIndex + 1 });
    console.log("right", activeIndex);
  }

  handleInputChange(e) {
    const { products } = this.state;
    let productsFilter = products.filter(prod => {
      return prod.category === e.target.value;
    });
    if (productsFilter.length === 0) {
      productsFilter = this.data;
      for (let i = 0; i < productsFilter.length; i++) {
        productsFilter[i].left = i * 200;
      }
    } else {
      for (let i = 0; i < productsFilter.length; i++) {
        productsFilter[i].left = i * 200;
      }
    }
    this.setState({
      input: e.target.value,
      products: productsFilter,
      activeIndex: 1
    });
  }

  render() {
    const { products, input } = this.state;
    const favView = products.map(prod => {
      return (
        <ProductsView
          prod={prod}
          onClick={this.onCommoditySelect}
          leftVal={prod.left}
          key={prod.index}
        />
      );
    });

    return (
      <div className="App">
        <div className="main-header">
          <span>Dynamic Carousel</span>
        </div>
        <div className="favourites">
          <div className="favourites-header">
            <div className="favourites-subheader">
              <span className="main-header-text">Products</span>
              <input
                type="text"
                className="input-box"
                value={this.state.input}
                onChange={e => this.handleInputChange(e)}
              />
            </div>
          </div>
          <div className="favourite-content">
            <button
              onClick={() => {
                this.moveLeft();
              }}
            >
              Left
            </button>
            <div
              className="favourite-view transform-product"
              id="favourites-view"
            >
              {favView}
            </div>
            <button
              onClick={e => {
                this.moveRight(e);
              }}
            >
              Right
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainApp;
