"use client";
import PageTitle from "../components/PageTitle";

import { useTranslation } from "react-i18next";

function Layout({ children }) {
  const { t } = useTranslation(["common"]);

  return (
    <div>
      {/* <PageTitle title={t("services")} /> */}
      {children}
    </div>
  );
}

export default Layout;
