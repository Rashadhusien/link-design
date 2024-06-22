// "use client";

import PageTitle from "../components/PageTitle";

import initTranslations from "../../i18n";
import TranslationsProvider from "../contexts/TranslationsProvider";

const i18nNamespces = ["common"];

async function layout({ params: { locale }, children }) {
  const { t, resources } = await initTranslations(locale, i18nNamespces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespces}
    >
      <div>
        <PageTitle title={t("about")} />
        {children}
      </div>
    </TranslationsProvider>
  );
}

export default layout;
