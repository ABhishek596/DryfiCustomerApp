import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import Icons from '../Icons';

const InputWithIcon = ({
  placeholder,
  onChangeText,
  value,
  inputTextStyle,
  keyboardType,
  maxLength,
  leftIcon,
  editable,
  label,
  multiline,
  numberOfLines,
  inputStyle,
}) => {
  const [focusColor, setFocusColor] = useState(COLORS.borderColor);

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputBox,
          inputStyle,
          {borderColor: focusColor},
          multiline && {alignItems: 'flex-start'},
        ]}>
        <Icons
          name={leftIcon}
          size={20}
          color={
            focusColor == COLORS.secondary
              ? COLORS.secondary
              : COLORS.placeholderColor
          }
          style={[styles.icon, multiline && {marginTop: SIZES.height * 0.012}]}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.placeholderColor}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          maxLength={maxLength}
          style={[
            styles.inputTextStyle,
            inputTextStyle,
            multiline && {textAlignVertical: 'top'},
          ]}
          editable={editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onBlur={() => setFocusColor(COLORS.borderColor)}
          onFocus={() => setFocusColor(COLORS.secondary)}
        />
      </View>
    </View>
  );
};

InputWithIcon.defaultProps = {
  inputTextStyle: null,
  onChangeText: null,
  placeholder: null,
  value: null,
  keyboardType: 'default',
  maxLength: null,
  inputStyle: null,
  leftIcon: 'email',
  editable: true,
  label: null,
  multiline: false,
  numberOfLines: null,
};

export default InputWithIcon;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },

  icon: {
    paddingLeft: SIZES.width * 0.03,
  },

  inputBox: {
    width: SIZES.width * 0.9,
    // height: SIZES.height * .065,
    borderWidth: 1.2,
    borderRadius: SIZES.width * 0.024,
    // borderColor: COLORS.borderColor,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: SIZES.height * .03,
    marginBottom: SIZES.height * 0.02,
    paddingLeft: SIZES.height * 0.01,
  },

  inputTextStyle: {
    // borderWidth: 1,
    width: SIZES.width * 0.8,
    fontFamily: FONTS.regular,
    // fontSize: 15,
    fontSize: SIZES.width * 0.041,
    color: COLORS.black,
    paddingBottom: SIZES.height * 0.01,
    paddingLeft: SIZES.width * 0.03,
  },

  label: {
    // borderWidth: 1,
    fontFamily: FONTS.medium,
    // fontSize: 15,
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
    marginBottom: SIZES.height * 0.005,
  },
});
