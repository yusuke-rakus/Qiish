import React from "react";
import { NAVITEM_DATA } from "../../const/NAVITEM_DATA";
import { NavItem } from "../old_atoms";

type Props = {
  isLogin: boolean;
};

const NavItems: React.FC<Props> = ({ isLogin }) => {
  return (
    <React.Fragment>
      {NAVITEM_DATA.map((navItem) => {
        return (
          <NavItem
            key={navItem.link}
            name={navItem.name}
            link={navItem.link}
            loginState={navItem.loginState}
            isLogin={isLogin}
          />
        );
      })}
    </React.Fragment>
  );
};

export default NavItems;
