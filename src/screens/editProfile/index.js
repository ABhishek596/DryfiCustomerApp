import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalStyles from '../../styles/globalStyles';
import { COLORS, SIZES, images } from '../../constants';
import styles from './styles';
import Icons from '../../component/Icons';
import { connect } from 'react-redux';
import { GetUserDataApi, UpdateUserApi } from '../../redux/actions/authActions';
import InputWithIcon from '../../component/input/InputWithIcon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button1 from '../../component/button/Button1';
import Loading from '../../component/loading';
import { http2 } from '../../services/api';
import ImageCropPicker from 'react-native-image-crop-picker';
import { RNToasty } from 'react-native-toasty';


const EditProfile = ({ navigation, UpdateUserApi, userData, loading, GetUserDataApi }) => {

    const [loadingIndicator, setLoadingIndicator] = useState(false)
    // const userData = route.params && route.params.userData
    const [profileImage, setProfileImage] = useState(images.profile1)
    // const customerData = userData?.customer_details
    // console.log("userData", userData)
    // console.log("profile image : ", userData && userData.image)

    const [postData, setPostData] = useState({
        customer_name: null,
        phone_number: null,
        profile_picture: null,
        // address: null
    })

    const handleChange = (name, value,) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    const ImagePick = () => {
        ImageCropPicker.openPicker({
            width: SIZES.width * .3,
            height: SIZES.height * .15,
            cropping: true
        }).then(image => {
            setProfileImage({ uri: image.path })
            handleChange("profile_picture", {
                uri: image.path,
                name: image.filename || Date.now() + "-" + image.path.slice(-10),
                type: image.mime
            })
        });
    }

    const handleSubmit = () => {

        if (postData.customer_name && postData.profile_picture?.uri && postData.phone_number) {
            // SignUpApi(postData, navigation)
            UpdateUserApi(postData, navigation, (data) => setLoadingIndicator(data))

        } else {
            RNToasty.Error({
                title: "Please fill all fields",
                duration: 2
            })
        }
    }

    useEffect(() => {
        GetUserDataApi()
    }, [])

    useEffect(() => {
        if (userData) {
            if (userData.profile_picture) {
                setProfileImage({ uri: userData.profile_picture })
            }
            setPostData({
                "customer_name": userData.customer_details?.customer_name,
                "phone_number": userData.customer_details?.phone_number,
                "profile_picture": { uri: userData.profile_picture, name: "profile_picture.jpg", type: "image/jpg" },
            })
        }
    }, [userData])

    console.log("uodate customer profile : ", postData)
    // console.log("laldsfjao g; ", loadingIndicator)


    return (
        <>
            {loading ?
                <Loading />
                :
                <View style={globalStyles.container}>
                    <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />

                    {/* header */}
                    <ImageBackground
                        source={images.bg}
                        style={styles.header_bg}
                    >
                        <View style={styles.header_row}>
                            <TouchableOpacity style={styles.back_btn}
                                onPress={() => navigation.goBack()}
                            >
                                <Icons name={"back"} size={22} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={styles.page_title}>Edit Profile</Text>
                        </View>

                        <TouchableOpacity style={styles.profile_box}
                            onPress={ImagePick}
                        >

                            <View style={styles.image_box}>
                                {/* <Image source={postData?.profile_picture?.uri ?{ uri: postData.profile_picture?.uri} : images.profile1} style={styles.profile}
                                    //  resizeMode='contain'
                                    resizeMode='stretch'
                                /> */}
                                <Image source={profileImage} style={styles.profile}
                                    //  resizeMode='contain'
                                    resizeMode='stretch'
                                />
                            </View>
                            <TouchableOpacity style={styles.edit_btn}
                                onPress={ImagePick}
                            >
                                <Icons name={"edit"} size={15} color={COLORS.secondary} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </ImageBackground>

                    {/* button container */}
                    <KeyboardAwareScrollView
                        keyboardShouldPersistTaps={'handled'}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.box}>
                            <Text style={styles.title}>Basic Details</Text>

                            <InputWithIcon
                                placeholder={"Enter your Name"}
                                leftIcon={"user"}
                                label={"Name"}
                                value={postData.customer_name}
                                onChangeText={(text) => handleChange("customer_name", text)}
                            />

                            <InputWithIcon
                                placeholder={"Email Address"}
                                leftIcon={"email"}
                                label={"Email Address"}
                                value={userData?.customer_details?.email}
                                editable={false}
                            />
                            <InputWithIcon
                                placeholder={"Phone Number"}
                                leftIcon={"call"}
                                label={"Phone Number"}
                                keyboardType={"numeric"}
                                maxLength={10}
                                value={postData.phone_number}
                                onChangeText={(text) => handleChange("phone_number", text)}
                            />
                            {/* <InputWithIcon
                                placeholder={"Address"}
                                leftIcon={"location"}
                                label={"Address"}
                                value={postData.address}
                                multiline={true}
                                numberOfLines={3}
                                onChangeText={(text) => handleChange("address", text)}
                            /> */}
                            <Button1
                                disabled={loadingIndicator}
                                loading={loadingIndicator}
                                onPress={handleSubmit}
                            >Update</Button1>
                        </View>
                    </KeyboardAwareScrollView>

                </View>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
    loading: state.auth.loading,
})

const mapDispatchToProps = {
    UpdateUserApi,
    GetUserDataApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)