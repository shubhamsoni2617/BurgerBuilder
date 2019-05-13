import * as actionType from './actionType';
import axios from '../../axios-orders'

export const AddIngredients=(name)=>{
    return {
        type: actionType.ADD_INGREDIENT,
        ingredientName:name
    }
}

export const removeIngredients=(name)=>{
    return {
        type: actionType.REMOVE_INGREDIENT,
        ingredientName:name
    }
}

export const setIngredients=(ingredients)=>{
    return {
        type:actionType.SET_INGRDIENTS,
        ingredients:ingredients
    }
}

export const initIngredients=()=>{
    return dispatch=>{
        axios.get('/ingredients.json')
        .then(response=>{
            dispatch(setIngredients(response.data))
        })
        .catch(error=>console.log(error))
    }
}   