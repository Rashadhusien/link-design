import PageTitle from "../components/PageTitle";
import { headerNav } from "../data/data";


function Layout({ children }) {
  return (
    <div>
      <PageTitle title={headerNav.contactUs} />
      {children}
    </div>
  );
}

export default Layout;
