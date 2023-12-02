import {
  ADDON_LIST,
  COLOR_LIST,
  DAMAGE_LIST,
  DELIVERY_TYPE_LIST,
  LOADING,
  PACKING_LIST,
  PRODUCT_DATA,
  STAINS_LIST,
  TIME_LIST,
} from '../types';

const initialState = {
  productData: null,
  loading: false,
  colorList: null,
  damageList: null,
  stainsList: null,
  packingList: null,
  addonList: null,
  timeList: null,
  deliveryTypeList: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload,
      };
    case COLOR_LIST:
      return {
        ...state,
        colorList: action.payload,
      };
    case DAMAGE_LIST:
      return {
        ...state,
        damageList: action.payload,
      };
    case STAINS_LIST:
      return {
        ...state,
        stainsList: action.payload,
      };
    case PACKING_LIST:
      return {
        ...state,
        packingList: action.payload,
      };
    case ADDON_LIST:
      return {
        ...state,
        addonList: action.payload,
      };
    case TIME_LIST:
      return {
        ...state,
        timeList: action.payload,
      };
    case DELIVERY_TYPE_LIST:
      return {
        ...state,
        deliveryTypeList: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
