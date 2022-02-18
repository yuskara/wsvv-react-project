import React from "react";
import { NavLink } from "react-router-dom";
import Particles from "react-particles-js";
import particlesConfig from "../../../config/particlesConfig";
import "../../css/HomeHeader.css";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@chakra-ui/react";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="header-container">
      <Particles className="header-particles" params={particlesConfig} />
      <div className="header-background-img">
        <div className="header-title">
          <div className="header-text">{t("welcomeMessage")}</div>
          <div className="header-button">
            <Tooltip label="Foundation">
              <NavLink
                to="#portfolio_more"
                activeClassName="header-active-title-btn"
              >
                {t("exploreMessage")}
              </NavLink>
            </Tooltip>
            <Particles className="header-particles" params={particlesConfig} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
