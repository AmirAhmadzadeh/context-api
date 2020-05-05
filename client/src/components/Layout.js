import React, { Component } from 'react'
import classes from '../sass/layout.module.scss'; 
import Header from './header' ; 

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.root_container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}



export default Layout
