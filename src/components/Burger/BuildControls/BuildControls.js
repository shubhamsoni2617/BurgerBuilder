import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Meat', type:'meat'},
    {label:'Cheese', type:'cheese'},
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'}
]
const buildControls=(props)=>(

    <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
     {controls.map(elem=><BuildControl key={elem.label} label={elem.label}
     added={()=>props.ingredientsAdded(elem.type)} 
     removed={()=>props.ingredientRemoved(elem.type)}
     disabled={props.disabled[elem.type]}
     />)}
     <button className={classes.Button} disabled={props.contentAdded} onClick={props.showContent}>Order Now</button>
     </div>
    
)

export default buildControls;