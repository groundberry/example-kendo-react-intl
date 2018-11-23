import { Component } from "react";
import {
  registerForIntl,
  provideIntlService
} from "@progress/kendo-react-intl";

class NumberFormatter extends Component {
  render() {
    const { value } = this.props;

    return provideIntlService(this).formatNumber(value);
  }
}

registerForIntl(NumberFormatter);

export default NumberFormatter;
