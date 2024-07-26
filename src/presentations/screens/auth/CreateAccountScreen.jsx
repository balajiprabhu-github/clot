import React from "react";
import { useState } from "react";
import PrimaryTextInput from "../../components/text/PrimaryTextInput";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/buttons/BackButton";
import Spacer from "../../components/Spacer";
import Title from "../../components/text/Title";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import styles from "../../components/styles";
import Labels from "../../../resources/label";
import apiCall from "../../../data/network/ApiClient";
import GenerateRandomToken from "../../../utilities/tokenGenerator";
import KeyStore from "../../../data/local/KeyStore";
import Route from "../../../resources/routes";

export default function CreateAccountScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableButton, setEnableButton] = useState(false);

  const handleEnableButton = (text) => {
    if (
      firstName != null &&
      lastName != null &&
      email != null &&
      password != null
    ) {
      setPassword(text)
      setEnableButton(true);
    }
  };

  const handleFirstName = (firstName) => {
    setFirstName(firstName)
  }

  const handleLastName = (lastName) => {
    setLastName(lastName)
  }

  const handleEmail = (email) => {
    setEmail(email)
  }

  const handleCreateAccount = async () => {
    if (enableButton) {
      try {
        const response = await apiCall("/users", "POST", {
          email: email,
          username: firstName + lastName,
          password: password,
          name: {
            firstname: firstName,
            lastname: lastName,
          },
          address: {
            city: "kilcoole",
            street: "7835 new road",
            number: 3,
            zipcode: "12926-3874",
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
          },
          phone: "1-570-236-7033",
        });

        if (response) {
         await KeyStore.save("userToken", GenerateRandomToken());
         navigation.replace(Route.HOME_SCREEN);
        }

      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.defaultContainer}>
      <BackButton navigation={navigation}></BackButton>

      <Spacer height={20}></Spacer>

      <Title text={Labels.CREATE_ACCOUNT}></Title>

      <Spacer height={20}></Spacer>

      <PrimaryTextInput
        onTextChange={handleFirstName}
        placeholder={Labels.FIRST_NAME}></PrimaryTextInput>

      <Spacer height={20}></Spacer>

      <PrimaryTextInput
        onTextChange={handleLastName}
        placeholder={Labels.LAST_NAME}></PrimaryTextInput>

      <Spacer height={20}></Spacer>

      <PrimaryTextInput
        onTextChange={handleEmail}
        placeholder={Labels.EMAIL}></PrimaryTextInput>

      <Spacer height={20}></Spacer>

      <PrimaryTextInput
        shouldHide={true}
        onTextChange={handleEnableButton}
        placeholder={Labels.PASSWORD}></PrimaryTextInput>

      <Spacer height={40}></Spacer>

      <PrimaryButton
        label={Labels.CONTINUE}
        enabled={enableButton}
        onPress={handleCreateAccount}></PrimaryButton>
    </SafeAreaView>
  );
}
