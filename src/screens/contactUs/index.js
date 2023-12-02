import { View, Text, ScrollView, StatusBar, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import styles from './styles'
import globalStyles from '../../styles/globalStyles'
import { COLORS, SIZES, images } from '../../constants'
import InputWithIcon from '../../component/input/InputWithIcon'
import Button1 from '../../component/button/Button1'
import Icons from '../../component/Icons'

const ContactButton = ({ iconName, title, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.5}
            style={styles.contact_btn}
            onPress={onPress}
        >
            <View style={styles.icon_box}>
                <Icons name={iconName} size={18} color={COLORS.white} />
            </View>
            <Text style={styles.btn_title}>{title}</Text>
        </TouchableOpacity>
    )
}

const ContactUs = () => {
    return (
        <ScrollView style={globalStyles.container}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar backgroundColor="transparent" translucent={true} barStyle='light-content' />
            <View style={globalStyles.center}>
                <Image source={images.contact} style={styles.image} resizeMode='stretch' />

                <View style={styles.btn_row}>
                    <ContactButton
                        iconName={"call"}
                        title={"Call Us"}
                        onPress={() => Linking.openURL(`tel:8463872922`)}
                    />
                    <ContactButton
                        iconName={"email"}
                        title={"Email Us"}
                        onPress={() => { Linking.openURL(`mailto:laundry@gmail.com?subject=test&body=hi`) }}
                    />
                    <ContactButton
                        iconName={"headphone"}
                        title={"Chat"}
                        onPress={() => { Linking.openURL(`whatsapp://send?phone=+91 9098194917&text=Hi`) }}
                    />
                </View>
                {/* contact form */}
                <View style={styles.box}>
                    <Text style={styles.title}>Quick Contact</Text>
                    <InputWithIcon
                        label={"Full Name"}
                        leftIcon={"user"}
                        placeholder={"Anmol Brass"}
                    // value={""}
                    />
                    <InputWithIcon
                        label={"Email Address"}
                        leftIcon={"email"}
                        placeholder={"anmolbrass.ex@gmail.com"}
                    // value={""}
                    />
                    <InputWithIcon
                        label={"Phone Number"}
                        leftIcon={"call"}
                        placeholder={"Anmol Brass"}
                        // value={""}
                        keyboardType={"numeric"}
                        maxLength={10}
                    />
                </View>

                <Button1
                    style={{ marginBottom: SIZES.height * .03 }}
                >
                    Send
                </Button1>
            </View>
        </ScrollView>
    )
}

export default ContactUs