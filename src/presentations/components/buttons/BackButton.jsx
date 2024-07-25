import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import BackArrow from '../../../../assets/back.png';
import styles from '../../../presentations/components/styles';

const BackButton = ({ navigation }) => {
    return (
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={BackArrow} style={styles.backButtonIcon} />
      </TouchableOpacity>
    );
}          

export default BackButton;               

