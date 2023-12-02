import {
  BUY_SUBSCRIPTION,
  SUBSCRIPTION_DETAILS,
  SUBSCRIPTION_PACKAGE_DETAILS,
  SUBSCRIPTION_PACKAGE_LIST,
} from '../types';

const initialState = {
  subsPackageList: null,
  subsPackageDetails: null,
  subsDetails: null,
  buySubStatus: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIPTION_PACKAGE_LIST:
      return {
        ...state,
        subsPackageList: action.payload,
      };
    case SUBSCRIPTION_PACKAGE_DETAILS:
      return {
        ...state,
        subsPackageDetails: action.payload,
      };
    case SUBSCRIPTION_DETAILS:
      return {
        ...state,
        subsDetails: action.payload,
      };
    case BUY_SUBSCRIPTION:
      return {
        ...state,
        buySubStatus: action.payload,
      };

    default:
      return state;
  }
};
