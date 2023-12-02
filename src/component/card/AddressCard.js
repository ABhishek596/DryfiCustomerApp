import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from '../Icons'
import { COLORS, FONTS, SIZES } from '../../constants'

const AddressCard = () => {
    return (
        <View style={styles.card}>
            {/* <View style={styles.box}> */}
            <View style={styles.box_row}>
                <Text style={styles.key}>Address</Text>
                <Text style={styles.value}>B-23, C-Sector, Indrapuri</Text>
            </View>
            <View style={styles.box_row}>
                <Text style={styles.key}>City</Text>
                <Text style={styles.value}>Bhopal</Text>
            </View>
            <View style={styles.box_row}>
                <Text style={styles.key}>Postal Code</Text>
                <Text style={styles.value}>462022</Text>
            </View>
            <View style={styles.box_row}>
                <Text style={styles.key}>Country</Text>
                <Text style={styles.value}>India</Text>
            </View>
            <View style={styles.box_row}>
                <Text style={styles.key}>Phone</Text>
                <Text style={styles.value}>9174683191</Text>
            </View>

            {/* </View> */}
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.edit_btn}
                onPress={() => navigation.navigate("EditAddress")}
            >
                <Icons name={"edit1"} size={20} color={COLORS.gray30} />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.delete_btn}
            >
                <Icons name={"delete"} size={20} color={COLORS.danger} />
            </TouchableOpacity>
        </View>
    )
}

export default AddressCard

const styles = StyleSheet.create({
     // ============== address card =============
     card: {
        width: SIZES.width * .9,
        backgroundColor: COLORS.white,
        elevation: 5,
        borderRadius: SIZES.width * .03,
        paddingVertical: SIZES.height * .02,
        // paddingHorizontal: SIZES.width * .04,
        marginVertical: SIZES.height * .025,
        paddingLeft: SIZES.width * .04,
        // flexDirection: 'row',
        // alignItems: 'center',
    },

    box: {
        width: SIZES.width * .7,
        borderWidth: 1,
    },

    box_row: {
        width: SIZES.width * .75,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.height * .005,
    },

    key: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.width * .034,
        color: COLORS.black82,
        marginBottom: -4,
    },

    value: {
        width: SIZES.width * .5,
        fontFamily: FONTS.medium,
        fontSize: SIZES.width * .034,
        color: COLORS.black4F,
        marginBottom: -4,
        // borderWidth: 1,
    },

    edit_btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        borderBottomLeftRadius: SIZES.width * .03,
        backgroundColor: COLORS.lightF6,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
    },

    delete_btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        borderTopLeftRadius: SIZES.width * .03,
        backgroundColor: COLORS.lightF6,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
})