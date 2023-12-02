import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions } from "react-native";
import { COLORS, SIZES, icons, images, } from "../../constants";
import styles from "./styles";
import { CreateNewAddressApi, UpdateAddressApi } from "../../redux/actions/addressAction";
import { connect } from "react-redux";
import Input1 from "../../component/input/Input1";
import Button1 from "../../component/button/Button1";
import { useEffect } from "react";
import { RNToasty } from "react-native-toasty";



const EditAddress = ({ navigation, userData, UpdateAddressApi, route }) => {

    // const address_field = route.params.addressData.address?.split(",")
    const addressData = route.params.addressData

    const [loading, setLoading] = useState(false)

    const [postData, setPostData] = useState({
        customer_name: null,
        phone_number: null,
        pincode: null,
        address: null,
        locality: null,
        city: null,
        state: null,
        country: null,
        lang: 0,
        map: 0,
        lat: 0,
    })

    const handleChange = (name, value) => {
        setPostData({
            ...postData,
            [name]: value
        })
    }

    useEffect(() => {
        if (addressData) {
            setPostData({
                ...postData,
                "customer_name": addressData.customer_name,
                "phone_number": addressData.phone_number,
                "address": addressData.address,
                "locality": addressData.locality,
                "city": addressData.city,
                "state": addressData.state,
                "pincode": addressData.pincode,
                "country": addressData.country,
            })
        }

    }, [addressData])

    const handleSubmit = () => {
        if (postData.address && postData.city && postData.pincode &&
            postData.locality && postData.state && postData.country) {
            UpdateAddressApi(postData, navigation, route.params?.addressData?.id, (data) => setLoading(data))
            setPostData({
                "customer_name": null,
                "phone_number": null,
                "pincode": null,
                "address": null,
                "locality": null,
                "city": null,
                "state": null,
                "country": null,
                "lang": 0,
                "map": 0,
                "lat": 0,
            })
        } else {
            RNToasty.Error({
                title: "Please fill all fields",
                duration: 2
            })
        }

    }

    // console.log("user data : ", userData)


    return (
        <ScrollView showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={'handled'}
            style={styles.container}
        >

            <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />

            <View style={styles.formContainer}>
                <Text style={styles.label}>Contact Details</Text>
                <Input1
                    placeholder={"Name"}
                    value={postData.customer_name}
                    onChangeText={(text) => handleChange("customer_name", text)}
                />

                <Input1
                    placeholder={"Phone number"}
                    value={postData.phone_number}
                    onChangeText={(text) => handleChange("phone_number", text)}
                    maxLength={10}
                    keyboardType={"numeric"}
                />


                <Text style={styles.label}>Address</Text>
                <Input1
                    placeholder={"Pin Code"}
                    value={postData.pincode}
                    onChangeText={(text) => handleChange("pincode", text)}
                    maxLength={6}
                    keyboardType={"numeric"}
                />
                <Input1
                    placeholder={"Address"}
                    value={postData.address}
                    onChangeText={(text) => handleChange("address", text)}
                />
                <Input1
                    placeholder={"Locality"}
                    value={postData.locality}
                    onChangeText={(text) => handleChange("locality", text)}
                />
                <Input1
                    placeholder={"Country"}
                    value={postData.country}
                    onChangeText={(text) => handleChange("country", text)}
                />
                <View style={styles.inputRow}>
                    <Input1
                        placeholder={"City"}
                        value={postData.city}
                        onChangeText={(text) => handleChange("city", text)}
                        inputStyle={{ width: SIZES.width * .42, }}
                    />
                    <Input1
                        placeholder={"State"}
                        value={postData.state}
                        onChangeText={(text) => handleChange("state", text)}
                        inputStyle={{ width: SIZES.width * .42, }}
                    />
                </View>

                {/* <View style={styles.BtnRow}>
                        <CheckBox
                            disabled={false}
                            value={postData.defaultAddress}
                            tintColors={{ true: 'black', false: 'black' }}
                            onValueChange={(newValue) => handleChange("defaultAddress", newValue)}
                            style={styles.checkBox}
                        />
                        <Text style={styles.text}>Make this as my default address</Text>
                    </View> */}

                <Button1
                    disabled={loading}
                    loading={loading}
                    onPress={handleSubmit}
                    style={styles.addBtn}
                >Save Address</Button1>

            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
})

const mapDispatchToProps = {
    CreateNewAddressApi,
    UpdateAddressApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAddress);