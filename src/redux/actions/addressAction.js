import AsyncStorage from '@react-native-async-storage/async-storage';
import {RNToasty} from 'react-native-toasty';
import http from '../../services/api';
import {ADDRESS, LOADING} from '../types';
import objectToFormData from '../../services/objectToFormData';
import {formDataHeader} from '../../services/formDataHeader';

export const CreateNewAddressApi =
  (postData, navigation, cb) => async dispatch => {
    const userId = await AsyncStorage.getItem('@USER_ID');
    // console.log("postData : ",userId, postData)

    postData = await objectToFormData(postData);

    cb && cb(true);
    dispatch({
      type: LOADING,
      payload: true,
    });
    http
      .post(`add_address?userid=${userId}`, postData, formDataHeader)
      .then(response => {
        // console.log("res : ", response.data)
        if (response.data.response) {
          dispatch(GetAllAddressApi());
          RNToasty.Success({
            title: response.data.message,
            duration: 2,
          });
          cb && cb(false);
          dispatch({
            type: LOADING,
            payload: false,
          });
          //   navigation?.goBack('Address');
          navigation?.goBack();
        } else {
          cb && cb(false);
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
        cb && cb(false);
        dispatch({
          type: LOADING,
          payload: false,
        });
        console.log('error address : ', error);
        RNToasty.Error({
          title: error.response.data?.message,
          duration: 2,
        });
      });
  };

export const GetAllAddressApi = () => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');
  dispatch({
    type: LOADING,
    payload: true,
  });
  // console.log("get address ; ", userId)

  http
    .get(`address_data?userid=${userId}`)
    .then(response => {
      if (response.data.response) {
        dispatch({
          type: LOADING,
          payload: false,
        });
        dispatch({
          type: ADDRESS,
          payload: response.data.data,
        });
        // RNToasty.Success({
        //     title: response.data.message,
        //     duration: 2,
        // });
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
      RNToasty.Error({
        title: error.response.data?.message,
        duration: 2,
      });
    });
};

export const DeleteAddressApi = addressId => async dispatch => {
  const userId = await AsyncStorage.getItem('@USER_ID');
  dispatch({
    type: LOADING,
    payload: true,
  });

  http
    .get(`delete_address?id=${addressId}&userid=${userId}`)
    .then(response => {
      if (response.data.response) {
        dispatch(GetAllAddressApi());
        RNToasty.Success({
          title: response.data.message,
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
      RNToasty.Error({
        title: error.response.data?.message,
        duration: 2,
      });
    });
};

export const UpdateAddressApi =
  (postData, navigation, addressId, cb) => async dispatch => {
    const userId = await AsyncStorage.getItem('@USER_ID');
    // console.log("postData : ",  postData)
    postData = await objectToFormData(postData);

    dispatch({
      type: LOADING,
      payload: true,
    });

    cb && cb(true);

    http
      .post(
        `edit_address?id=${addressId}&userid=${userId}`,
        postData,
        formDataHeader,
      )
      .then(response => {
        if (response.data.response) {
          dispatch(GetAllAddressApi());
          RNToasty.Success({
            title: response.data?.message,
            duration: 2,
          });
          cb && cb(false);
          dispatch({
            type: LOADING,
            payload: false,
          });

          navigation?.goBack();
        } else {
          dispatch({
            type: LOADING,
            payload: false,
          });
          cb && cb(false);
          // RNToasty.Info({
          //     title: response.data.message,
          //     duration: 2,
          // });
        }
      })
      .catch(error => {
        console.log('update address error : ', error.response.data);
        dispatch({
          type: LOADING,
          payload: false,
        });
        cb && cb(false);
        RNToasty.Error({
          title: error.response.data?.message,
          duration: 2,
        });
      });
  };
