import About from "./about/page";
import Services from "./services/page";

import Swippe from "./components/Swippe";

import initTranslations from "../i18n";

import TranslationsProvider from "./contexts/TranslationsProvider";

const i18nNamespces = [
  "default",
  "services",
  "links",
  "about",
  "common",
  "header",
  "swipper",
  "footer",
];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespces}
    >
      <div>
        <Swippe />
        <About />
        <Services />
      </div>
    </TranslationsProvider>
  );
}
