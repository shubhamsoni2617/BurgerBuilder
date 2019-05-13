import React from 'react'
import classes from './NavigationItem.module.css';
import NavigationItems from './NavigationItems/NavigationItems'

const navigationItem=(props)=>( 

<ul className={classes.NavigationItem}>
    <NavigationItems link={'/'} active={'true'} exact={true}>BurgerApp</NavigationItems>
    <NavigationItems link={'/Orders'} >Orders</NavigationItems>

</ul>

)

export default navigationItem