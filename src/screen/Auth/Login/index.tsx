import React, {useState} from 'react';
import {View} from 'react-native';
import styles from '../styles';
import AuthHeader from '../components/AuthHeader/AuthHeader';
import AuthLayout from '../components/AuthLayout/AuthLayout';
import Input from '../../../common/components/Input';
import DefaultButton from '../../../common/components/DefaultButton';

interface IInputValue {
  email: string;
  password: string;
  errorEmail: null | string;
  errorPassword: null | string;
}

const LoginPage = () => {
  const [inputValues, setInputValues] = useState<IInputValue>({
    email: '',
    password: '',
    errorEmail: null,
    errorPassword: null,
  });
  const handleChangeInput = (
    key: 'email' | 'password' | 'errorEmail' | 'errorPassword',
    value: null | string,
  ) => {
    setInputValues(prevState => ({...prevState, [key]: value}));
  };
  const checkEmail = () => {
    const emailValidator = new RegExp(
      '^([a-z0-9._%-]+@[a-z0-9.-]+.[a-z]{2,6})*$',
    );
    if (!emailValidator.test(inputValues.email)) {
      handleChangeInput('errorEmail', 'Not valid email');
    } else {
      handleChangeInput('errorEmail', null);
    }
  };
  const checkPassword = (text: string) => {
    if (text.length < 8) {
      handleChangeInput(
        'errorPassword',
        'Paasword must be more then 8 symbols',
      );
    } else {
      handleChangeInput('errorPassword', null);
    }
  };
  const isDisabledLoginBtn = Boolean(
    inputValues.errorEmail ||
      inputValues.errorPassword ||
      !inputValues.email ||
      !inputValues.password,
  );
  return (
    <AuthLayout>
      <AuthHeader activeTab="login" />
      <View style={styles.formContainer}>
        <Input
          onBlur={checkEmail}
          value={inputValues.email}
          onChangeText={text => handleChangeInput('email', text)}
          error={inputValues.errorEmail}
          placeholder={'Email'}
        />
        <Input
          placeholder={'Password'}
          value={inputValues.password}
          onChangeText={text => {
            handleChangeInput('password', text);
            checkPassword(text);
          }}
          secureTextEntry={true}
        />
      </View>
      <DefaultButton
        onPress={() => {}}
        disabled={isDisabledLoginBtn}
        text={'Увійти'}
      />
    </AuthLayout>
  );
};
export default LoginPage;
