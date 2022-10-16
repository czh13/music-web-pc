import React, { memo } from "react";
import { discoverMenu } from "@/common/local-data.js";

import { DiscoverWrapped } from "./style";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const News = memo((prop) => {
  const { route } = prop;
  return (
    <DiscoverWrapped>
      <div className="content wrap-v2">
        <div className="menu">
          {discoverMenu.map((item, index) => {
            return (
              <div className="menu-item" key={item.title}>
                <NavLink className="menu-link"  to={item.link}>
                  {item.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapped>
  );
});

export default News;
