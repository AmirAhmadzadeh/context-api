import React from 'react';
import classes from '../sass/header.module.scss';
import Navigation from './navigation';

export default function () {
  return (
    <header className={classes.root}>
      <Navigation />
    </header>
  )
}
