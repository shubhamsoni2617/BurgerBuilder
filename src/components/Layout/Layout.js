import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'



class Layout extends Component{
    state={
        purchasable:false
    }


    showModalhandler=()=>{
        
        this.setState(prevState=>{
           return  {purchasable:!prevState.purchasable};
        })
    }
    render(){

        return(
            <Aux>
            <SideDrawer show={this.state.purchasable} clicked={this.showModalhandler}/>
            <Toolbar clicked={this.showModalhandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>  
        )
    }
}

export default Layout;