import React from 'react';
import PrimaryTextInput from '../components/text/PrimaryTextInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/buttons/BackButton';
import Spacer from '../components/Spacer';
import Title from '../components/text/Title';
import PrimaryButton from '../components/buttons/PrimaryButton';
import styles from '../components/styles';
import Labels from '../../resources/label';

export default function CreateAccountScreen({navigation}) {
    return (
      <SafeAreaView style={styles.defaultContainer}>
        <BackButton navigation={navigation}></BackButton>

        <Spacer height={20}></Spacer>

        <Title text={Labels.CREATE_ACCOUNT}></Title>

        <Spacer height={20}></Spacer>

        <PrimaryTextInput placeholder={Labels.FIRST_NAME}></PrimaryTextInput>

        <Spacer height={20}></Spacer>

        <PrimaryTextInput placeholder={Labels.LAST_NAME}></PrimaryTextInput>

        <Spacer height={20}></Spacer>

        <PrimaryTextInput placeholder={Labels.EMAIL}></PrimaryTextInput>

        <Spacer height={20}></Spacer>

        <PrimaryTextInput placeholder={Labels.PASSWORD}></PrimaryTextInput>

        <Spacer height={40}></Spacer>

        <PrimaryButton label={Labels.CONTINUE}></PrimaryButton>
      </SafeAreaView>
    );
}
