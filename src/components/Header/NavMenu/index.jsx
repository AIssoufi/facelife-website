// Dependencies
import React, { useState } from "react";

// Icons
import { ReactComponent as FriendsIcon } from './icons/friends.svg';
import { ReactComponent as GroupsIcon } from './icons/groups.svg';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as MarketPlaceIcon } from './icons/marketplace.svg';
import { ReactComponent as WatchIcon } from './icons/watch.svg';

// CSS
import './NavMenu.scss';

const NavMenu = props => {
  const [currentItem, setCurrentItem] = useState(0);
  const menuItems = [
    { icon: <HomeIcon />, tooltipText: "Accueil" },
    { icon: <FriendsIcon />, tooltipText: "Amis" },
    { icon: <WatchIcon />, tooltipText: "Watch" },
    { icon: <MarketPlaceIcon />, tooltipText: "Marketplace" },
    { icon: <GroupsIcon />, tooltipText: "Groupes" }
  ];

  return (
    <ul id="nav-menu-comp">
      {menuItems.map((item, index) => {
        const isActive = (index == currentItem);

        return (
          <li
            className={`item${isActive ? ' active': ''}`}
            onClick={() => setCurrentItem(index)}
          >
            <div className="icon">
              {item.icon}
            </div>
            <div className="tooltip">
              {item.tooltipText}
            </div>
          </li>
        );
      })}
    </ul>
  )
};

export default NavMenu;
