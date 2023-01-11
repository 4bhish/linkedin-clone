import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



const Post = forwardRef(({name,desc,message,photoUrl}, ref) => {
  const user = useSelector(selectUser);
  return (
    <div ref={ref} className='post'>
      <div className="post__header">
        <Avatar src={photoUrl}/>
        <div className="post__info">
            <h2>{name}</h2>
            <p>{desc}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__button">
        <InputOption
        title="Like"
        Icon={ThumbUpOutlinedIcon}
        color="grey"
         />

         <InputOption
        title="Comment"
        Icon={ChatOutlinedIcon}
        color="grey"
         />

         <InputOption
        title="Share"
        Icon={ShareOutlinedIcon}
        color="grey"
         />

         <InputOption
        title="Send"
        Icon={SendOutlinedIcon}
        color="grey"
         />
      </div>
    </div>
  )
})

export default Post
