import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CountryPicker from "react-native-country-picker-modal";
import Keypad from "./Keypad";

export default function CountryPhoneInput() {
  const [phoneCountryCode, setPhoneCountryCode] = useState("PK");
  const [phoneCountryCallingCode, setPhoneCountryCallingCode] = useState("92");
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
  const [phoneNo, setPhoneNo] = useState("123123");

  const onPressKeypad = (number) => {
    if (isNaN(number)) {
      switch (number) {
        case "delete":
          setPhoneNo(phoneNo.slice(0, phoneNo.length - 1));
          break;

        default:
          break;
      }
    } else {
      setPhoneNo(`${phoneNo}${number}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <CountryPicker
          countryCode={phoneCountryCode}
          visible={showPhoneCountryPicker}
          onSelect={(country) => {
            console.log("COUNTERY ==> ", country);
            setPhoneCountryCode(country.cca2);
            setPhoneCountryCallingCode(country.callingCode);
            setShowPhoneCountryPicker(false);
          }}
          withFilter={true}
        />
        <View style={styles.phoneTextContainer}>
          <Text style={styles.phoneCountryCallingCodeText}>
            +{phoneCountryCallingCode}
          </Text>
          <Text style={styles.phoneNoText}>{phoneNo}</Text>
        </View>
      </View>
      <View style={styles.keypadContainer}>
        <Keypad onPress={(number) => onPressKeypad(number)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#F0EAD8",
  },
  inputContainer: {
    height: 80,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#808080",
    padding: 10,
    borderRadius: 5,
  },
  phoneTextContainer: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  phoneCountryCallingCodeText: {
    fontWeight: "bold",
    marginRight: 10,
  },
  phoneNoText: {
    fontWeight: "bold",
  },
  keypadContainer: {
    flex: 1,
  },
});
