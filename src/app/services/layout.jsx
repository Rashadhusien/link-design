import { Analytics } from "@vercel/analytics/react"
function Layout({ children }) {
  return( <div>
    <Analytics/>
    {children}
    </div>);
}

export default Layout;
