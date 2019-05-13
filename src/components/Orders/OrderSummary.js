import React from 'react';
import classes from './OrderSummary.module.css';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button'

const orderSummary=(props)=>(
<div className={classes.Center}>
    <div >
     <h4 >Your Tasty Burger is here:</h4>
    </div>

<Burger ingredients={props.ingredients} />
<Button btntype='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
 <Button btntype='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
</div>

)

export default orderSummary;

