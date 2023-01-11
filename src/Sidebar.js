import { Avatar } from '@mui/material'
import './Sidebar.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
  const user = useSelector(selectUser);

    function Topics(hashtag)
  {
    return(
      <div className="sidebar__recentItem">
        <span className='sidebar__hash'>#</span>
        <p className='sidebar__hashtag'>{hashtag}</p>
      </div>
    )
  }
  return (
    <div className='sidebar'>
       <div className="sidebar__top">
        <img src="https://media.licdn.com/dms/image/D5616AQEJ2TzhefjnAg/profile-displaybackgroundimage-shrink_350_1400/0/1670098476445?e=1678320000&v=beta&t=yDYnVsqqhXkjWgB8Se_GZraIMigUewZm0z2kJh_991A" alt="" />

        <Avatar src={user?.photoUrl}  className='sidebar__avatar'/>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
       </div>
       <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who viewed you?</p>
            <p className='sidebar__statNumber'>2,345</p>
        </div>
        <div className="sidebar__stat">
            <p>Views on  post</p>
            <p className="sidebar__statNumber">2.345</p>
        </div>
       </div>
       <div className="sidebar__bottom">
        <p>Recent</p>
        {Topics ('javaScrpit')}
        {Topics ('nodeJs')}
        {Topics ('reactJs')}
        {Topics ('css')}
        {Topics ('html5')}
       </div>
    </div>
  )
}

export default Sidebar
