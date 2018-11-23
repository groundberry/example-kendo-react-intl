import React, { Component } from "react";
import CurrencyFormatter from "./CurrencyFormatter";
import DateFormatter from "./DateFormatter";
import LocalizedMessage from "./LocalizedMessage";
import NumberFormatter from "./NumberFormatter";
import productImage from "./Product.svg";
import "./Product.css";

export default class Product extends Component {
  render() {
    const { date, number, price, currency } = this.props;

    return (
      <div className="Product">
        <div className="Product-image">
          <img src={productImage} alt="" />
        </div>
        <div className="Product-details">
          <h1 className="Product-name">
            <LocalizedMessage message="product-name" />
          </h1>
          <p>
            <LocalizedMessage message="product-description" />
          </p>
          <p className="Product-line">
            <strong>
              <LocalizedMessage message="product-start-date" />
            </strong>
            : <DateFormatter value={date} />
          </p>
          <p className="Product-line">
            <strong>
              <LocalizedMessage message="product-seats-available" />
            </strong>
            : <NumberFormatter value={number} />
          </p>
          <p className="Product-line">
            <strong>
              <LocalizedMessage message="product-price" />
            </strong>
            : <CurrencyFormatter value={price} currency={currency} />
          </p>
          <div className="Product-cta">
            <button className="Product-button">
              <LocalizedMessage message="add-to-cart" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
