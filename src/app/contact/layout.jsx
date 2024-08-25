import PageTitle from "../components/PageTitle";
import { headerNav } from "../data/data";
import { Analytics } from "@vercel/analytics/react"


function Layout({ children }) {
  return (
    <div>
      <Analytics/>
      <PageTitle title={headerNav.contactUs} />
      {children}
    </div>
  );
}

export default Layout;
