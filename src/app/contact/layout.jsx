import PageTitle from "../components/PageTitle";
import { headerNav } from "../data/data";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


function Layout({ children }) {
  return (
    <div>
      <Analytics/>
      <SpeedInsights/>
      <PageTitle title={headerNav.contactUs} />
      {children}
    </div>
  );
}

export default Layout;
