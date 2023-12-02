import { ADDRESS, LOADING,  } from "../types";

const initialState = {
    loading: false,
    address: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case ADDRESS:
            return {
                ...state,
                address: action.payload
            }

        default:
            return state;
    }
}