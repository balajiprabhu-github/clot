import React from "react";
import { TextInput } from "react-native";
import styles from "../styles";

const PrimaryTextInput = (
  { placeholder,
    onTextChange,
    shouldHide,
    maxLength
  }) => {
    return (
      <TextInput
        style={styles.primaryTextInput}
        placeholder={placeholder}
        onChangeText={onTextChange}
        secureTextEntry={shouldHide}
        maxLength={maxLength}
      />
    );
} 

export default PrimaryTextInput;