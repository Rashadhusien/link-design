

import PageTitle from "../components/PageTitle";
import { headerNav } from "../data/data";


function Layout({ children }) {

  return (
    <div>
      <PageTitle title={headerNav.about} />
      {children}
    </div>
  );
}

export default Layout;
