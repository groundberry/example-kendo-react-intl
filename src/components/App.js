import React, { Component } from "react";
import { IntlProvider, LocalizationProvider } from "@progress/kendo-react-intl";
import { loadForLocale as loadCldr } from "../i18n/cldr";
import { loadForLocale as loadMessages } from "../i18n/messages";
import Config from "./Config";
import Product from "./Product";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      locale: "en",
      currency: "USD",
      loaded: false
    };
  }

  componentDidMount() {
    this.ensureLoaded();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.locale !== this.state.locale) {
      this.ensureLoaded();
    }
  }

  render() {
    const { locale, currency, loaded } = this.state;

    if (!loaded) {
      return null;
    }

    return (
      <IntlProvider locale={locale}>
        <LocalizationProvider language={locale}>
          <div className="App">
            <Product
              date={new Date()}
              number={1000}
              price={99.99}
              currency={currency}
            />
            <Config
              locale={locale}
              currency={currency}
              onChangeLocale={this.onChangeLocale}
              onChangeCurrency={this.onChangeCurrency}
            />
          </div>
        </LocalizationProvider>
      </IntlProvider>
    );
  }

  onChangeLocale = event => {
    this.setState({
      locale: event.target.value,
      loaded: false
    });
  };

  onChangeCurrency = event => {
    this.setState({
      currency: event.target.value
    });
  };

  ensureLoaded = async () => {
    const { locale, loaded } = this.state;

    if (loaded) {
      return;
    }

    await loadCldr(locale);
    await loadMessages(locale);

    this.setState({
      loaded: true
    });
  };
}
