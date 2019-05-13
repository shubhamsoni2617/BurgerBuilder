import React from 'react';
import classes from './Order.module.css'

const order=(props)=>{
    let type=[]
    for(let prop in props.ingredients){
        type.push(`${prop.charAt(0).toUpperCase()+ prop.slice(1)}:(${props.ingredients[prop]})`)
    }
console.log(type);
    return (
     <div className={classes.Order}>
        <h3>{type.join(' ')}</h3>
        <p>Price: <strong>INR 100</strong></p> 
    </div>   
    )
    
}

export default order;