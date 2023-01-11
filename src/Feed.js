import React, { useEffect } from 'react'
import { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css'
import InputOption from './InputOption';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post.js';
import { db } from './Firebase.js';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser)
  const [myInput,setMyInput] = useState("")
  const [posts,setPosts]=useState([]);


  useEffect(() =>{
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map(doc =>(
        {
          id:doc.id,
          data:doc.data(),
        }
      ))
    )
    );
  },[])


  function sendPost(event){
    event.preventDefault();

    db.collection("posts").add({
      name:user.displayName,
      description:user.email,
      message:myInput,
      photoUrl:user.photoUrl || "",
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMyInput("")
  }
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form action="">
                <input value={myInput} 
                onChange={e => setMyInput((e.target.value))} 
                type="text" />
                <button
                 onClick={sendPost}
                 type='submit'>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption
            title='Photo'
            Icon={PhotoLibraryIcon}
            color="#378fe9"
            />
            <InputOption
            title='Video'
            Icon={SmartDisplayIcon}
            color="#5f9b41"
            />
            <InputOption
            title='Event'
            Icon={CalendarMonthIcon}
            color="#c37d16"
            />
            <InputOption
            title='Write article'
            Icon={NewspaperIcon}
            color="#e16745"
            />
        </div>
      </div>
      <FlipMove>
      {
        posts.map(({id,data:{name,description,message,photoUrl}}) => (
          <Post
          key={id}
          name={name}
          desc={description}
          message={message}
          photoUrl={photoUrl}
           />
        ))
      }
      </FlipMove>
    </div>
  )
}

export default Feed
