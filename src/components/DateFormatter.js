import { Component } from "react";
import {
  registerForIntl,
  provideIntlService
} from "@progress/kendo-react-intl";

class DateFormatter extends Component {
  render() {
    const { value } = this.props;

    return provideIntlService(this).formatDate(value, {
      date: "medium"
    });
  }
}

registerForIntl(DateFormatter);

export default DateFormatter;
