import Swippe from "./components/Swippe";

import initTranslations from "../i18n";

import TranslationsProvider from "./contexts/TranslationsProvider";
import HomePageTitle from "./components/HomePageTitle";
import ImageAndTextAbout from "./about/components/ImageAndTextAbout";
import ServiceCard from "./services/components/ServiceCard";

import TestemonialsCards from "./testemonials/components/TestemonialsCards";
import Book from "./contact/components/Book";

const i18nNamespces = [
  "default",
  "services",
  "links",
  "about",
  "common",
  "header",
  "swipper",
  "footer",
  "contact",
];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespces}
    >
      <div className="">
        <Swippe />
        <div className="container mx-auto py-24">
          <ImageAndTextAbout />
        </div>
        <div className="bg-[#F5F8FE] py-24">
          <div className="container mx-auto ">
            <HomePageTitle
              title={t("common:services")}
              style={`text-darkBlue`}
              currentLang={locale}
            />
            <ServiceCard />
          </div>
        </div>
        <div className="py-24">
          <HomePageTitle
            title={t("common:testimonial")}
            style={`text-darkBlue`}
            currentLang={locale}
          />
          <TestemonialsCards />
        </div>
        <div className="bg-[#F5F8FE] pt-24">
          <HomePageTitle title={t("common:contact")} currentLang={locale} />
          <Book />
        </div>
      </div>
    </TranslationsProvider>
  );
}
