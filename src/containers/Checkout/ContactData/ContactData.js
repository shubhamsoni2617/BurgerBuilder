import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import {connect } from 'react-redux';
import * as actions from '../../../store/actions/index'


class ContactData extends Component{
    state={
        orderForm:{
        name:{
            elemType:'input',
            elemConfig:{
                type:'text',
                placeholder:'Your name',
               },
               value:'',
               validation:{
                   required:true
               },
               valid:false,
               touched:false
        },
        email: {
            elemType:'input',
            elemConfig:{
                type:'email',
                placeholder:'Your E-Mail',
               },
               value:'',
               validation:{
                   required:true
               },
               valid:false,
               touched:false
        },
        street: {
            elemType:'input',
            elemConfig:{
                type:'text',
                placeholder:'Street',
               },
               value:'',
               validation:{
                   required:true
               },
               valid:false,
               touched:false
        },
        zipCode: {
            elemType:'input',
            elemConfig:{
                type:'text',
                placeholder:'ZIP Code',
               },
               value:'',
               validation:{
                   required:true,
                   minLength:5,
                   maxLength:5
               },
               valid:false,
               touched:false
        },
        country:{
            elemType:'input',
            elemConfig:{
                type:'text',
                placeholder:'Country',
               },
               value:'',
               validation:{
                   required:true
               },
               valid:false,
               touched:false
        },
        delieveryMethod:{
            elemType:'select',
            elemConfig:{
                options:[{value:'fastest', displayValue:'Fastest'},
                         {value:'cheapest', displayValue:"Cheapest"}]
            },
            valid:true,
            validation:{},
            value:'fastest'
        }
    },

    formIsValid:false,
        
        // loading:false
    }
    clickHandler=(event)=>{
        event.preventDefault();
      let customerInfo={};
      for(let key in this.state.orderForm){
         customerInfo[key]=this.state.orderForm[key].value
      }
        let loader=this.state.loading;
    let orders={
        ingredients:this.props.ings,
        customerInfo:customerInfo
    }
    this.props.onOrderBurger(orders);

    // axios.post('./Orders.json', orders)
    // .then(response=>{
    //     this.setState({ loading:!loader });
    //     this.props.history.push('/') 
    // })
    // .catch(error=>this.setState({
    //     loading:false,
    // }));
    }
    
    onChangeHandler=(event,id)=>{
        const copyForm={...this.state.orderForm};
        const copyFormElem={...this.state.orderForm[id]};
        copyFormElem.value=event.target.value;
        copyFormElem.valid=this.checkValid(copyFormElem.value, copyFormElem.validation);
        copyFormElem.touched=true;
        
        copyForm[id]=copyFormElem

        let formIsValid=true;
        for(let key in copyForm){

            formIsValid =(copyForm[key].valid && formIsValid)
                
        }
        this.setState({
            orderForm:copyForm,
            formIsValid:formIsValid
        })

    }

    checkValid(value, rules){
       let isValid=true;
       if(rules.required){
           isValid=value.trim()!=="" && isValid
       }
       
       if(rules.minLength){
           isValid=value.length>=rules.minLength && isValid
       }
       if(rules.maxLength){
        isValid=value.length<=rules.maxLength && isValid
    }
       return isValid 

    }

    render(){
            let formElementArray=[];
            for(let key in this.state.orderForm){
                formElementArray.push({
                    id:key,
                    config: this.state.orderForm[key]
                })
            }
            let formData=(
                formElementArray.map(prop=>
                    <Input key={prop.id}
                    elemType={prop.config.elemType}
                    elemConfig={prop.config.elemConfig}
                    value={prop.config.value}
                    invalid={!prop.config.valid}
                    shouldUpdate={prop.config.validation}
                    touched={prop.config.touched}
                    changed={(event)=>this.onChangeHandler(event, prop.id)}/>
                    )
            )


        return (
            <div className={classes.ContactData}>

                <form onSubmit={this.clickHandler} className={classes.Form}>
                    <h4>Enter your contact details:</h4>
                    {formData}
                    <Button btntype='Success' disabled={!this.state.formIsValid}>ORDER</Button>
                </form>
            </div>
        )
    }
}

const mapPropsToState=state=>{
    return {
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        loading:state.order.loading
    }
};

const mapDispatchToProps=dispatch=>{
    return {
        onOrderBurger: (orderData)=>dispatch(actions.purchaseBurgerStart(orderData))
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(ContactData);