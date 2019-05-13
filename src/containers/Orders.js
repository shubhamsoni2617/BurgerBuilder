import React, { Component } from 'react';
import Order from '../components/Order/Order';
import axios from '../axios-orders';

class Orders extends Component{
state={
    
    orders:null,
    loading:true
}

componentDidMount(){
    this.state.loading=true;
    axios.get('/Orders.json')
    .then(response=>{
        let arr=[];
        for(let prop in response.data){
            arr.push({...response.data[prop], id:prop})
        }
        console.log(arr);
        this.setState({
            orders:arr,
            loading:false
        });
        
    })
    .catch(error=>this.setState({
        
        loading:false
    }))
    
}

    render(){
        
        
        let  orderEnd="loading..."
         if(!this.state.loading){
           orderEnd=this.state.orders.map(el=><Order key={el.id} ingredients={el.ingredients}/>)
          }
       
     console.log(this.state.orders)
        return (
            <div>
             {orderEnd}     
            </div>
        )
    }
}

export default Orders;