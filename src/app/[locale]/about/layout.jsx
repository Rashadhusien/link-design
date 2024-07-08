"use client";

import PageTitle from "../components/PageTitle";

import { useTranslation } from "react-i18next";

function Layout({ params: { locale }, children }) {
  const { t } = useTranslation(["common"]);

  return (
    <div>
      <PageTitle title={t("about")} />
      {children}
    </div>
  );
}

export default Layout;
