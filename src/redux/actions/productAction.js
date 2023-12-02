import {RNToasty} from 'react-native-toasty';
import http, {http1} from '../../services/api';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import objectToFormData from '../../services/objectToFormData';
import {formDataHeader} from '../../services/formDataHeader';

function transformArrayOfArraysToObjectArray(arrayOfArrays) {
  const transformedArray = [];

  arrayOfArrays.forEach(subArray => {
    subArray.forEach(item => {
      transformedArray.push(item);
    });
  });

  return transformedArray;
}

export const GetAllProduct = (serviceId, catId) => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`product_data`)
    .then(async response => {
      if (response.data.status == 1) {
        const arrObj = await transformArrayOfArraysToObjectArray(
          response.data.result,
        );
        dispatch({
          type: PRODUCT_DATA,
          payload: arrObj,
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
        // RNToasty.Info({
        //     title: response.data.message,
        //     duration: 2,
        // });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      // console.log("user data error : ", error.response.data)
      // RNToasty.Error({
      //     title: error.response.data.message,
      //     duration: 2,
      // });
    });
};

export const GetProductByCatId = catId => async dispatch => {
  // const userId = await AsyncStorage.getItem("@USER_ID")
  // console.log("usfs fi id ; ", userId)

  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`product_with_category?catid=${catId}`)
    .then(async response => {
      if (response.data.response) {
        dispatch({
          type: PRODUCT_DATA,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
        // RNToasty.Info({
        //     title: response.data.message,
        //     duration: 2,
        // });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      // console.log("user data error : ", error.response.data)
      // RNToasty.Error({
      //     title: error.response.data.message,
      //     duration: 2,
      // });
    });
};

export const GetProductByServiceId = (serviceId, catId) => async dispatch => {
  console.log('service id cat id ', serviceId, catId);

  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`product_data`)
    .then(async response => {
      if (response.data.status == 1) {
        console.log('succed', response.data);
        dispatch({
          type: PRODUCT_DATA,
          payload: transformArrayOfArraysToObjectArray(response.data.result),
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
        // RNToasty.Info({
        //     title: response.data.message,
        //     duration: 2,
        // });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      // console.log("user data error : ", error.response.data)
      // RNToasty.Error({
      //     title: error.response.data.message,
      //     duration: 2,
      // });
    });
};

export const GetProductFeatures = () => async dispatch => {
  dispatch(GetColorList());
  dispatch(GetDamageList());
  dispatch(GetPackingList());
  dispatch(GetStainsList());
  dispatch(GetAddonList());
  dispatch(GetDeliveryType());
};

export const GetColorList = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`color_data`)
    .then(async response => {
      if (response.data.response) {
        dispatch({
          type: COLOR_LIST,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};

export const GetDeliveryType = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`delivery_types`)
    .then(async response => {
      if (response.data.response) {
        dispatch({
          type: DELIVERY_TYPE_LIST,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};

export const GetStainsList = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`stain_data`)
    .then(async response => {
      if (response.data.response) {
        dispatch({
          type: STAINS_LIST,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};

export const GetDamageList = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`damage_data`)
    .then(async response => {
      if (response.data.response) {
        dispatch({
          type: DAMAGE_LIST,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};

export const GetPackingList = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`packing_data`)
    .then(async response => {
      if (response.data.response) {
        dispatch({
          type: PACKING_LIST,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};

export const GetAddonList = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`addon_data`)
    .then(async response => {
      if (response.data.response) {
        dispatch({
          type: ADDON_LIST,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};

export const GetTime = postData => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .post(`get_time`, postData)
    .then(async response => {
      if (response.data.result) {
        dispatch({
          type: TIME_LIST,
          payload: response.data.result,
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};
