// Dependencies
import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import { ReactComponent as FriendsIcon } from './icons/friends.svg';
import { ReactComponent as GroupsIcon } from './icons/groups.svg';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as MarketPlaceIcon } from './icons/marketplace.svg';
import { ReactComponent as WatchIcon } from './icons/watch.svg';

// CSS
import './NavMenu.scss';

const NavMenu = props => {
  const menuItems = [
    {
      icon: <HomeIcon />,
      url: "/",
      tooltipText: "Accueil"
    },
    {
      icon: <FriendsIcon />,
      url: "/friends",
      tooltipText: "Amis"
    },
    {
      icon: <WatchIcon />,
      url: "/watch",
      tooltipText: "Watch"
    },
    {
      icon: <MarketPlaceIcon />,
      url: "/marketplace",
      tooltipText: "Marketplace"
    },
    {
      icon: <GroupsIcon />,
      url: "/groups",
      tooltipText: "Groupes"
    }
  ];

  return (
    <ul id="nav-menu-comp">
      {menuItems.map(item => {
        return (
          <li className="item">
            <NavLink exact to={item.url} activeClassName="active" className="link">
              <div className="icon">
                  {item.icon}

              </div>
              <div className="tooltip">
                {item.tooltipText}
              </div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  )
};

export default NavMenu;
