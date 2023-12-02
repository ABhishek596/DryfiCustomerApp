import AsyncStorage from '@react-native-async-storage/async-storage';
import http from '../../services/api';
import {
  BUY_SUBSCRIPTION,
  LOADING,
  SUBSCRIPTION_DETAILS,
  SUBSCRIPTION_PACKAGE_DETAILS,
  SUBSCRIPTION_PACKAGE_LIST,
} from '../types';
import {RNToasty} from 'react-native-toasty';

export const GetAllSubsPackages = () => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');

  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .post(`get_subscription_packages?customer_id=${userId}`)
    .then(async response => {
      if (response.data?.status === 1) {
        dispatch({
          type: SUBSCRIPTION_PACKAGE_LIST,
          payload: response.data.result.subscriptions,
        });
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

export const GetActiveSubscription = () => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');

  console.log(`get_subscription_details?customer_id=${userId}`);
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .post(`get_subscription_details?customer_id=${userId}`)
    .then(async response => {
      console.log('get_subscription_details', response.data);
      if (response.data?.status === 1) {
        dispatch({
          type: SUBSCRIPTION_DETAILS,
          payload: response.data.result,
        });
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
      console.log(error);
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};

export const GetSubsPackagesDetails = id => async dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .post(`get_subscription_package_by_id?subscription_id=${id}`)
    .then(async response => {
      if (response.data?.status === 1) {
        dispatch({
          type: SUBSCRIPTION_PACKAGE_DETAILS,
          payload: response.data.result,
        });
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

export const BuySubscription = (sId, pId) => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');
  dispatch({
    type: LOADING,
    payload: true,
  });
  http
    .post(
      `buy_subscription?customer_id=${userId}&sub_id=${sId}&payment_id=${pId}`,
    )
    .then(async response => {
      console.log('BuySubscription'.response.data);
      if (response.data?.status === 1) {
        dispatch({
          type: BUY_SUBSCRIPTION,
          payload: {success: true},
        });
        RNToasty.Success({
          title: 'Your subscription was successfully purchased.',
          duration: 2,
        });
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
