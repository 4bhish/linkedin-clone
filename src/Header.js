import React from 'react'
import './Header.css'
import linkedICon from './imgs/linkedinicon.png'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from './Firebase';


function Header() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  function logoutApp(){
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='header'>
      <div className="header__left">
        <img src={linkedICon} alt="linkedin" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions 
        title="Home"
        Icon={HomeIcon}
        />

        <HeaderOptions 
        title="Network"
        Icon={PeopleIcon}
        />

        <HeaderOptions 
        title="Jobs"
        Icon={BusinessCenterIcon}
        />

        <HeaderOptions 
        title="Message"
        Icon={MessageIcon}
        />

        <HeaderOptions 
        title="Notifications"
        Icon={NotificationsIcon}
        />

        <HeaderOptions 
        title="Logout"
        Icon={LogoutIcon}
        onClick={logoutApp}
        />
      </div>
    </div>
  )
}

export default Header
