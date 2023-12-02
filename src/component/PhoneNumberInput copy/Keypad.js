import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Keypad({ onPress }) {
  const keyPadRows = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
    ["", "call", "delete"],
  ];

  const onPressButton = (button) => {
    onPress(button);
  };

  return (
    <View style={styles.container}>
      {keyPadRows.map((row) => (
        <View style={styles.keyPadRow}>
          {row.map((button) => (
            <TouchableOpacity
              style={styles.keypadButton}
              onPress={() => onPressButton(button)}
            >
              <Text style={styles.keypadLabel}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 50,
  },
  keyPadRow: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  keypadButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    width: 70,
    height: 70,
    backgroundColor: "#AAAAAA",
  },
  keypadLabel: {
    color: "white",
    fontSize: 18,
  },
});