import React from 'react';
import classes from './../sass/streamListItem.module.scss';

export default function (props) {
  return (
    <li className={classes.root}>
      streamItem {props.id}
    </li>
  )
}
