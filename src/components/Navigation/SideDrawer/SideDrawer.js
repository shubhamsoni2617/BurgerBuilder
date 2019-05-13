import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const sideDrawer=(props)=>{
let attachedClasses=[classes.SideDrawer, classes.Close];
if(props.show){
attachedClasses=[classes.SideDrawer, classes.Open]
}
     
return (
<Aux>
        <Backdrop show={props.show} clicked={props.clicked}/>
        <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
                       <Logo/>
        </div>

       <nav>
                  <NavigationItem />
            </nav>
          
        </div>
        </Aux>
    )
}

export default sideDrawer;