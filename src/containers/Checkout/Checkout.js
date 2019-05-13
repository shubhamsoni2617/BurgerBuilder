import React, { Component } from 'react';
import OrderSummary from '../../components/Orders/OrderSummary'
import ContactData from './ContactData/ContactData';
import { Route, Redirect } from 'react-router-dom';
import {connect } from 'react-redux';
import Aux from '../../hoc/Aux'


class Checkout extends Component{
state={
    // ingredients:{
       
    // }
}

// componentDidMount(){
//     const query=new URLSearchParams(this.props.location.search);
//     const ingredients={};
//     for(let param of query.entries()){
//         ingredients[param[0]]=+param[1];
       
//     }
   
//     this.setState({
//         ingredients:ingredients
//     })
// }
purchaseCancelHandler=()=>{
    return this.props.history.goBack();
}
purchaseContinueHandler=()=>{
    return this.props.history.replace('/checkout/contactData')
}


render(){
 let summary=<Redirect to='/' />
 const purchased=this.props.purchased?<Redirect to='/' />:null
 if(this.props.ings){
     summary=<Aux>
     <div style={{textAlign:"center"}}>
               <OrderSummary 
            ingredients={this.props.ings}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler} />
        <Route path={this.props.match.url+"/contactData"} 
            component={ContactData}/>   
        </div>
        </Aux>
 }
    return (<div>
         {purchased}  
{summary}
    </div>
        

    )
  }
}

const mapPropsToState=state=>{
    return {
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        purchased:state.order.purchased
    }
};
export default connect(mapPropsToState)(Checkout);