import { loadMessages } from "@progress/kendo-react-intl";

export const loadForLocale = async locale => {
  const messages = await import(`./${locale}.json`);
  loadMessages(messages.default, locale);
};
