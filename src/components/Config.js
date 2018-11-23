import React, { Component } from "react";
import "./Config.css";

export default class Config extends Component {
  render() {
    const { locale, currency, onChangeLocale, onChangeCurrency } = this.props;

    return (
      <div className="Config">
        <label htmlFor="locale">Locale:</label>
        <select
          id="locale"
          name="locale"
          value={locale}
          onChange={onChangeLocale}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
        <label htmlFor="currency">Currency:</label>
        <select
          id="currency"
          name="currency"
          value={currency}
          onChange={onChangeCurrency}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}
