import React, {Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component{

shouldComponentUpdate(nextProps, nextState){
    
    return nextProps.show!==this.props.show || nextProps.children!==this.props.children
    
}


    render(){  
    return (
        <Aux>
        <Backdrop show={this.props.showOrHide} clicked={this.props.shown}/>
        {!this.props.showOrHide?
            <div className={classes.ModalHide}>null</div>:
            <div className={classes.Modal} >
            {this.props.children}</div>}
            </Aux>

    )
        }
}
export default Modal;