import { PAYMENT_METHODS, LOADING, ORDER_LIST, SINGLE_ORDER, ORDER_STATUS_LIST, ORDER_ID, } from "../types";

const initialState = {
    loading: false,
    paymentMethods: null,
    orderList: null,
    singleOrder: null,
    orderStatusList: null,
    orderId: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case PAYMENT_METHODS:
            return {
                ...state,
                paymentMethods: action.payload
            }
        case ORDER_LIST:
            return {
                ...state,
                orderList: action.payload
            }
        case ORDER_ID:
            return {
                ...state,
                orderId: action.payload
            }
        case SINGLE_ORDER:
            return {
                ...state,
                singleOrder: action.payload
            }
        case ORDER_STATUS_LIST:
            return {
                ...state,
                orderStatusList: action.payload
            }
        default:
            return state;
    }
}