import * as actionTypes from '../actions/actionType'

const initialState={
    ingredients:null,
        totalPrice:4
}
const FIXED_INGREDIENT_PRICE={
    'salad':1.2,
    'meat': 2.2,
    'bacon':1.6,
    'cheese': 0.9
}

const reducer=(state=initialState, action)=>{
switch(action.type){
    case (actionTypes.ADD_INGREDIENT):
    return {
        ...state,
        ingredients:{
            ...state.ingredients,
           [action.ingredientName]:state.ingredients[action.ingredientName]+1
        },
        totalPrice:state.totalPrice+FIXED_INGREDIENT_PRICE[action.ingredientName]
    }
    case (actionTypes.REMOVE_INGREDIENT):
    return {
        ...state,
        ingredients:{
            ...state.ingredients,
           [action.ingredientName]:state.ingredients[action.ingredientName]-1
        },
        totalPrice:state.totalPrice-FIXED_INGREDIENT_PRICE[action.ingredientName]
    }
    case (actionTypes.SET_INGRDIENTS):
    return {
        ...state,
        ingredients:action.ingredients,
        totalPrice:4
    }
    default:
    return state;
}
}

export default reducer;