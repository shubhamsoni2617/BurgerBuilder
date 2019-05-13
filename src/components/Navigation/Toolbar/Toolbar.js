import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';

const toolbar=(props)=>(
    <header className={classes.Toolbar}>
<div onClick={props.clicked}>Menu</div>
   <div className={classes.Logo}>
                  <Logo />
   </div>

    <nav className={classes.DesktopOnly}>
    <NavigationItem />
    </nav>


    </header>
)

export default toolbar;