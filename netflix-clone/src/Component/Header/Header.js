import React from 'react';
import './Header.css'; // Ensure this file exists and has the relevant styles
import images from '../../Assets/images/image.png'; // Make sure the path is correct
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Header() {
  return (
    <div className="header_center_container">
      <div className="header_container">
        {/* Left Section */}
        <div className="header_left">
          <ul className='ulist'>
            <li>
              <img src={images} alt="Netflix-logo " className='logo'/>
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="header_right">
          <ul>
            {/* Add items like search, profile, etc., here */}
          <li><SearchIcon/></li>
          <li><NotificationsIcon/></li>
          <li><AccountBoxIcon/></li>
          <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
