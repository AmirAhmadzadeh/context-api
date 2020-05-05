import React from 'react'
import classes from '../sass/navigation.module.scss'
import NavigationItem from './navigationItem';
import GoogleOAuth from './GoogleOAuth';

export default function () {

  function onAuthClicked() {
    console.log('You clicked To authenticate YoureSelf')
  }

  return (
    <nav className={classes.root}>
      <ul className={classes.root_list}>
        <NavigationItem
          text='Streamer'
          link='/streamer'
        />
        <NavigationItem
          text='Streams'
          link='/'
        />

        <GoogleOAuth />

        {/* 
        <button
          className={classes.root_list_authButton}
          onClick={onAuthClicked}
        >
          Authenticate
       </button> */}


      </ul>
    </nav>
  )
}
