import {RNToasty} from 'react-native-toasty';
import http from '../../services/api';
import {
  LOADING,
  ORDER_ID,
  ORDER_LIST,
  ORDER_STATUS_LIST,
  PAYMENT_METHODS,
} from '../types';
import {formDataHeader} from '../../services/formDataHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CreateOrder = (postData, navigation, res) => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');

  // postData = await objectToFormData(postData)
  console.log('order create postdata ; ', postData);

  dispatch({
    type: LOADING,
    payload: true,
  });
  res && res(null);
  http
    .post(`add_order?userid=${userId}`, postData)
    .then(async response => {
      if (response.data?.response) {
        dispatch(GetAllOrders());
        dispatch({
          type: ORDER_ID,
          payload: response.data.data?.order_id,
        });
        res && res(response.data.data?.order_id);
        navigation?.navigate('Order');
        dispatch({
          type: LOADING,
          payload: false,
        });
      } else {
        res && res(null);
        dispatch({
          type: LOADING,
          payload: false,
        });
        RNToasty.Info({
          title: response.data?.message,
          duration: 2,
        });
      }
    })
    .catch(error => {
      res && res(null);
      dispatch({
        type: LOADING,
        payload: false,
      });
      // console.log("user data error : ", error.response.data)
      RNToasty.Error({
        title: error.response?.data?.message,
        duration: 2,
      });
    });
};

export const GetPaymentMethods = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`list_paymentmode`)
    .then(async response => {
      if (response.data?.response) {
        dispatch({
          type: PAYMENT_METHODS,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: .response.data.message,
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

export const GetAllOrders = () => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');
  console.log('get all order userid : ', userId);
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`orders_data?userid=${userId}`)
    .then(async response => {
      if (response.data?.response) {
        dispatch({
          type: ORDER_LIST,
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

export const GetSingleOrder = orderId => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`get_single_order?userid=${userId}&orderid=${orderId}`)
    .then(async response => {
      if (response.data?.response) {
        dispatch({
          type: PAYMENT_METHODS,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: .response.data.message,
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

export const GetOrderStatusList = () => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .get(`order_status`)
    .then(async response => {
      if (response.data?.response) {
        dispatch({
          type: ORDER_STATUS_LIST,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: .response.data.message,
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

export const UpdateTransactionApi =
  (transcationId, navigation, id) => async (dispatch, getState) => {
    const userId = await AsyncStorage.getItem('@USER_ID');
    const {orderId} = getState().order;

    console.log('transcaitong  order ', transcationId, userId, orderId);

    dispatch({
      type: LOADING,
      payload: true,
    });
    http
      .get(
        `razorpay-payment?razorpay_payment_id=${transcationId}&userid=${userId}&orderid=${id}`,
      )
      .then(async response => {
        if (response.data?.response) {
          dispatch(GetAllOrders());
          // RNToasty.Success({
          //     title: response.data.message,
          //     duration: 2,
          // });
          navigation?.navigate('PaymentSuccess');
          dispatch({
            type: LOADING,
            payload: false,
          });
        } else {
          dispatch({
            type: LOADING,
            payload: false,
          });
          RNToasty.Info({
            title: response.data.message,
            duration: 2,
          });
        }
      })
      .catch(error => {
        dispatch({
          type: LOADING,
          payload: false,
        });
        dispatch(GetAllOrders());
        // navigation?.navigate("PaymentSuccess")
        // console.log("user data error : ", error.response.data)
        RNToasty.Error({
          title: error.response?.data?.message,
          duration: 2,
        });
      });
  };
