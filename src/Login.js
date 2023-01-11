import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import {auth} from './Firebase'


import './Login.css'

function Login() {
    const [name,setName] = useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [ProfilePic,setprofilePic] = useState('')
    const dispatch = useDispatch();

    // {
    //     if(!name){
    //         return alert("Please enter a full name!")
    //     }
    //     auth.createUserWithEmailAndPassword(email,password)
    //     .then((userAuth) =>{
    //       userAuth.user.updateProfile({
    //         displayName:name,
    //         photoURL:ProfilePic
    //       })
    //     } )

    //     .then(() => {
    //       dispatch(login({
    //         email : userAuth.user.email,
    //         uid : userAuth.user.uid,
    //         displayName : name,
    //         photoURL : ProfilePic
    //       }));
    //     })

    //     .catch((error)=> alert(error));
    // }

    function register(){
      if(!name){
        return alert("Please enter a full name!");
      }

      auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName:name,
          photoURL:ProfilePic,
        })
        .then(() => {
          dispatch(
            login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:name,
            photoURL:ProfilePic
          })
          );
        });
        
      })
      .catch((error) => alert(error))
    };


    function loginToApp(e){
         e.preventDefault();
         
         auth.signInWithEmailAndPassword(email,password)
         .then(userAuth => {
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.uset.uid,
            displayName:userAuth.user.photoURL, 
          }))
         })
         .catch((error) =>alert(error));
    }
  return (
    <div className='login'>
     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1280px-LinkedIn_Logo_2013.svg.png' alt="" />
     <form>
        <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />

        <input value={ProfilePic} onChange={e => setprofilePic(e.target.value)} placeholder='Profile pic URL (optional)' type="text" />

        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />

        <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="password" />

        <button type='submit' onClick={loginToApp}>Sign In</button>

     </form>
     <p>
        Not a member?
        <span className='login__register' onClick={register}> Register Now</span>
     </p>
    </div>
  )
}

export default Login
