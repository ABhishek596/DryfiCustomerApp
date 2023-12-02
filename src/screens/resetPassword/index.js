import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Linking, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import Button1 from '../../component/button/Button1';
import InputWithIcon1 from '../../component/input/InputWithIcon1';
import { COLORS, SIZES } from '../../constants';
import styles from './styles';
import { RNToasty } from 'react-native-toasty';
import globalStyles from '../../styles/globalStyles';
import { ResetPasswordApi } from '../../redux/actions/authActions';


const ResetPassword = ({ navigation, ResetPasswordApi, route }) => {
    const [secure, setSecure] = useState(true)
    const [secure1, setSecure1] = useState(true)
    const [disable, setDisable] = useState(true)
    const [loading, setLoading] = useState(false)

    const user_id = route.params && route.params.id
    // const user_id = 70

    const [postData, setPostData] = useState({
        password: null,
        confirm_password: null,
    })
    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    useEffect(() => {
        if (postData.password && postData.confirm_password) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [postData])

    const handleSubmit = () => {
        if (postData.password) {
            if (postData.password == postData.confirm_password) {
                ResetPasswordApi(postData, navigation, user_id, (data) => setLoading(data))
                setPostData({
                    "password": null,
                    "confirm_password": null,
                })
            } else {
                RNToasty.Error({
                    title: "Password and confirm password not match",
                    duration: 2
                })
            }
        }else {
            RNToasty.Error({
                title: "Please enter new password",
                duration: 2
            })
        }

    }
    return (
        <KeyboardAwareScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            style={globalStyles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
            <View style={globalStyles.justify_between}>
                <View style={globalStyles.center}>
                    <View style={globalStyles.title_box}>
                        <Text style={globalStyles.title}>Create New Password</Text>
                        <Text style={globalStyles.text}>Set the new password for your account so
                            you can login and access all the features</Text>
                    </View>

                    <InputWithIcon1
                        placeholder={"Enter your new password"}
                        leftIcon={"lock"}
                        rightIcon={secure ? "eye-off" : "eye"}
                        onPress={() => setSecure(!secure)}
                        secureTextEntry={secure}
                        value={postData.password}
                        onChangeText={(text) => handleChange("password", text)}
                    />
                    <InputWithIcon1
                        placeholder={"Confirm your new Password"}
                        leftIcon={"lock"}
                        rightIcon={secure1 ? "eye-off" : "eye"}
                        onPress={() => setSecure1(!secure1)}
                        secureTextEntry={secure1}
                        value={postData.confirm_password}
                        onChangeText={(text) => handleChange("confirm_password", text)}
                    />

                    <Button1
                        disabled={loading}
                        loading={loading}
                        onPress={handleSubmit}
                    // onPress={() => {handleSubmit(), navigation.navigate({ name: 'OnBoardingScreen' })}} 
                    >Reset Password</Button1>

                </View>

            </View>
        </KeyboardAwareScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    ResetPasswordApi
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)