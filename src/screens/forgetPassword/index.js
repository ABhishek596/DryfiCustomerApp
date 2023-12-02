import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Linking, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import Button1 from '../../component/button/Button1';
import InputWithIcon from '../../component/input/InputWithIcon';
import styles from './styles';
import { RNToasty } from 'react-native-toasty';
import globalStyles from '../../styles/globalStyles';
import { ForgetPasswordApi } from '../../redux/actions/authActions';


const ForgetPassword = ({ navigation, ForgetPasswordApi }) => {
    const [disable, setDisable] = useState(true)
    const [loading, setLoading] = useState(false)

    const [postData, setPostData] = useState({
        email: null,
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    useEffect(() => {
        if (postData.email) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [postData])

    const handleSubmit = () => {
        if (postData.email) {
            ForgetPasswordApi(postData, navigation, (data) => setLoading(data))
            setPostData({
                "email": null,
            })
        } else {
            RNToasty.Error({
                title: "Please enter your email",
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
                        <Text style={globalStyles.title}>Forgot Password</Text>
                        <Text style={globalStyles.text}>Enter your email for the verification process
                            we will send 4 digits code to your email</Text>
                    </View>

                    <InputWithIcon
                        placeholder={"Your Email"}
                        leftIcon={"email"}
                        value={postData.email}
                        onChangeText={(text) => handleChange("email", text)}
                    />

                    <Button1
                        disabled={loading}
                        loading={loading}
                        onPress={handleSubmit}
                    // onPress={() => navigation.navigate("Otp")}
                    >Send Code</Button1>

                </View>

            </View>
        </KeyboardAwareScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    ForgetPasswordApi
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword)