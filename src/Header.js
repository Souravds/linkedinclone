import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter,Chat, Notifications } from '@material-ui/icons';

function Header() {
  return (
    <div className="header">
      {/* Header Left */}
      <div className="header__left">
        <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="linked in" />
        
        {/* Header Search */}
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Header Right */}
      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenter} title="Jobs" />
          <HeaderOption Icon={Chat} title="Messaging" />
          <HeaderOption Icon={Notifications} title="Notifications" />
          <HeaderOption avatar="https://souravdasportfolio.web.app/img/ssrv.png" />
      </div>

    </div>
  )
}

export default Header
