import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
function Layout({ children }) {
  return( <div>
    <Analytics/>
    <SpeedInsights/>
    {children}
    </div>);
}

export default Layout;
