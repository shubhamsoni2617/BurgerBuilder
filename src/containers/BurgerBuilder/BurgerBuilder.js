import React, { Component } from 'react';
import {connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as action from '../../store/actions/index'


class BurgerBuilder extends Component{
    state={
        purchasable :false,
        loading:false
}

componentDidMount(){
    this.props.onInitIngredients();
}


showContentHandler=()=>{
    this.setState({
        purchasable:true
    })
}
showModalhandler=()=>{
    let shown=this.state.purchasable;
    this.setState({
        purchasable:!shown
    })
}
purchaseContinueHandler=()=>{
    
   this.props.onPurchased()
   this.props.history.push('/Checkout')
}

    render(){

        const disabledInfo={...this.props.ings};
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }

       let orderConfirmed=<OrderSummary ingredients={this.props.ings} purchaseContinue={this.purchaseContinueHandler}
        purchaseCancel={this.showModalhandler}
        price={this.props.price}/>
if(this.state.loading){
   orderConfirmed=<Spinner /> 
}
        let burger=null;
        const contentAdded=this.props.price===4.00;
        if(this.props.ings){
             burger= <Aux>
             <Burger ingredients={this.props.ings}/>
       <BuildControls ingredientsAdded={this.props.onIngridientAdded}
                      ingredientRemoved={this.props.onIngridientRemoved}
                      disabled={disabledInfo}
                      price={this.props.price}
                      contentAdded={contentAdded}
                      showContent={this.showContentHandler}/>  </Aux>
           
       }
   return (
            <Aux>
               <Modal showOrHide={this.state.purchasable } shown={this.showModalhandler}>
               {orderConfirmed}
               </Modal>
               {burger}
                     
            </Aux>
            
        )
    }
}

const mapPropsToState=state=>{
    return {
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
    }
};

const mapDispatchToProps=dispatch=>{
    return {
        onIngridientAdded:(ingsName)=>dispatch(action.AddIngredients(ingsName)),
        onIngridientRemoved:(ingsName)=>dispatch(action.removeIngredients(ingsName)),
        onInitIngredients:()=>dispatch(action.initIngredients()),
        onPurchased:()=>dispatch(action.purchaseInit())
    }
}
export default connect(mapPropsToState,mapDispatchToProps)(BurgerBuilder);