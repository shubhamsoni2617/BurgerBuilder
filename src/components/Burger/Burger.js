import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';


const burger=(props)=>{
    let transformedIngredients=Object.keys(props.ingredients).map(elem=>{
        
        return [...Array(props.ingredients[elem])].map((_,i)=>
 <BurgerIngredient key={i+elem} type={elem}  />
 )
    }).reduce((elem1, elem2)=>{
        return elem1.concat(elem2)
}, [])


    if(transformedIngredients.length===0){
        transformedIngredients=<p>Please, Add ingredients</p>
    }

    
    return (
<div className={classes.Burger}>
<BurgerIngredient type="bread-top" />
{transformedIngredients}
<BurgerIngredient type="bread-bottom" />

</div>

    )
}
export default burger;