import React from 'react'
import classes from './NavigationItems.module.css';
import { NavLink } from 'react-router-dom'

const navigationItems =(props)=>(

    <li className={classes.NavigationItems}>
    <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>
    {props.children}</NavLink></li>
)

export default navigationItems;