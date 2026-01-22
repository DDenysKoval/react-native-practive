import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../../../screen/Auth/styles';

interface IDefaulButtonProps {
  disabled?: boolean;
  onPress: () => void;
  text: string;
}

export default function DefaultButton({
  disabled = false,
  onPress,
  text,
}: IDefaulButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.loginBtnContainer, disabled && {opacity: 0.5}]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.loginText}>{text}</Text>
    </TouchableOpacity>
  );
}
