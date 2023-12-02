import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { LOADING, NOTIFICATION } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetAllNotification = () => async (dispatch, getState) => {
    // const userId = await AsyncStorage.getItem("@USER_ID")
    const userId = 3
    dispatch({
        type: LOADING,
        payload: true,
    });

    http.get(`notification_data?userid=${userId}`)
        .then(response => {
            if (response.data.response) {
                dispatch({
                    type: NOTIFICATION,
                    payload: response.data.data
                });

                dispatch({
                    type: LOADING,
                    payload: false,
                });
                // RNToasty.Success({
                //     title: "Get all notification successfully",
                //     duration: 2,
                // });
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
            // if (error.response.data.message) {
            //     RNToasty.Error({
            //         title: error.response.data.message,
            //         duration: 2,
            //     });
            // }

        })
};