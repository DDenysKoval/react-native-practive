import React from 'react';
import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import styles from '../../../screen/Auth/styles';
import {HidePassIcon, ViewPassIcon} from '../../../assets/icons';

interface IInputProps {
  onBlur?: () => void;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholderColor?: string;
  error?: string | null;
  secureTextEntry?: boolean;
  additionalContainerStyle?: ViewStyle;
  additionalInputStyle?: ViewStyle;
  onFocus?: () => void;
}

export default function Input({
  onBlur,
  placeholder,
  value,
  onChangeText,
  placeholderColor = '#838383',
  error,
  secureTextEntry = false,
  additionalContainerStyle,
  additionalInputStyle,
  onFocus,
}: IInputProps) {
  const [isPassHiden, setIsPassHiden] = useState(secureTextEntry);
  return (
    <>
      <View style={[styles.inputContainer, additionalContainerStyle]}>
        <TextInput
          placeholder={placeholder}
          style={[styles.input, additionalInputStyle]}
          placeholderTextColor={placeholderColor}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          onChangeText={text => onChangeText(text)}
          secureTextEntry={isPassHiden}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => {
              setIsPassHiden(!isPassHiden);
            }}
            hitSlop={{
              top: 15,
              bottom: 15,
              right: 15,
              left: 15,
            }}>
            {isPassHiden ? (
              <ViewPassIcon fill={'#000000'} />
            ) : (
              <HidePassIcon fill={'#a36161'} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {!!error && <Text>{error}</Text>}
    </>
  );
}
