import LayoutWrapper from "./LayoutWrapper";

import whiteLogo from "../../assets/img/logo-nttdata-blue.png";
import BgImage from "../../assets/img/squares-white.jpg";
import BgImageSmall from "../../assets/img/squares-white-small.jpg";
import { LayoutProps } from "./types";

const Layout = ({ subtitle, children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      {/* Left side */}
      <div className="left">
        <img src={BgImage} alt='NTT SIDE LOGO' className="bigimagebg" />
      </div>

      {/* Right side */}
      <div className="right">
        <img src={BgImageSmall} alt='NTT SMALL LOGO' className="smallimagebg" />
        <img src={whiteLogo} alt='NTT WHITE LOGO' className="logo" />
        <h2 className="title">Internal Network</h2>
        <h3 className="subtitle">{subtitle}</h3>

        {/* Form */}
        {children}
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
