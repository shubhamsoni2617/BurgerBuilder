import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


const orderSummary=(props)=>{
const list=Object.keys(props.ingredients)
.map((elem, i)=><li><strong key={elem+i} style={{textTransform: "capitalize"}}>{elem}</strong>
:{props.ingredients[elem]}</li>);

    return (<Aux>
<h3>Your Order is Here:</h3>
<h4>These are the ingredients that you have selected:</h4>
 <ul>{list}</ul>
 <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
 <Button btntype='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
 <Button btntype='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
           </Aux>)
}

export default orderSummary;