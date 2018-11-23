import { load } from "@progress/kendo-react-intl";

export const loadForLocale = async locale => {
  const cldr = await Promise.all([
    import("cldr-core/supplemental/likelySubtags.json"),
    import("cldr-core/supplemental/currencyData.json"),
    import("cldr-core/supplemental/weekData.json"),
    import(`cldr-numbers-full/main/${locale}/numbers.json`),
    import(`cldr-numbers-full/main/${locale}/currencies.json`),
    import(`cldr-dates-full/main/${locale}/ca-gregorian.json`),
    import(`cldr-dates-full/main/${locale}/dateFields.json`)
  ]);
  load(...cldr);
};
