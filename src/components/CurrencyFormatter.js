import { Component } from "react";
import {
  registerForIntl,
  provideIntlService
} from "@progress/kendo-react-intl";

class CurrencyFormatter extends Component {
  render() {
    const { value, currency } = this.props;

    return provideIntlService(this).formatNumber(value, {
      style: "currency",
      currency
    });
  }
}

registerForIntl(CurrencyFormatter);

export default CurrencyFormatter;
