"use client";
import PageTitle from "../components/PageTitle";
import { headerNav } from "../data/data";

import { useTranslation } from "react-i18next";

function Layout() {
  const { t } = useTranslation(["common"]);

  return (
    <div>
      <PageTitle title={t("testimonial")} />
    </div>
  );
}

export default Layout;
