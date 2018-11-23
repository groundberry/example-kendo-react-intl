import { Component } from "react";
import {
  registerForLocalization,
  provideLocalizationService
} from "@progress/kendo-react-intl";

class LocalizedMessage extends Component {
  render() {
    const { message } = this.props;

    return provideLocalizationService(this).toLanguageString(message);
  }
}

registerForLocalization(LocalizedMessage);

export default LocalizedMessage;
