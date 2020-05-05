import React from 'react'
import classes from '../sass/navigationItem.module.scss'
import { NavLink } from 'react-router-dom'

export default function (props) {
  return (
    <li className={classes.root}>
      <NavLink     
        className={classes.root_link}
        activeClassName={classes.root_link_active}
        to={props.link}
      >
        {props.text}
      </NavLink>
    </li>
  )
}
