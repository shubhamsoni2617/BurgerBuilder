import * as actionType from './actionType';
import axios from '../../axios-orders'

export const purchaseBurgerSuccess=(id, orderData)=>{
    return {
        type: actionType.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData
    }
}

export const purchaseBurgerFail=(error)=>{
    return {
        type: actionType.PURCHASE_BURGER_FAIL,
       error:error
    }
}

export const purchaseBurgerLoad=()=>{
    return {
        type:actionType.PURCHASE_BURGER_LOAD
    }
}

export const purchaseBurgerStart=(orderData)=>{
    return dispatch=>{
        dispatch(purchaseBurgerLoad())
        axios.post('./Orders.json', orderData)
    .then(response=>{
        dispatch(purchaseBurgerSuccess(response.data.name,orderData))
    })
    .catch(error=>dispatch(purchaseBurgerFail(error))
    );
    }
}

export const purchaseInit=()=>{
    return {
        type:actionType.PURCHASE_INIT
    }
}