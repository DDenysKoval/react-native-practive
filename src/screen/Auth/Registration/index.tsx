import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from '../styles';
import AuthHeader from '../components/AuthHeader/AuthHeader';
import AuthLayout from '../components/AuthLayout/AuthLayout';
import Input from '../../../common/components/Input';
import DefaultButton from '../../../common/components/DefaultButton';
import {Formik, FormikHelpers, FormikValues} from 'formik';
import {RegistrationSchema} from '../utils/validation';
import auth from '@react-native-firebase/auth';

interface ITouched {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

interface IFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const [touched, setTouched] = useState<ITouched>({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const registerUser = async (
    email: string,
    password: string,
    formikHelpers: FormikHelpers<IFormValues>,
  ) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        formikHelpers.setErrors({email: 'Email already in use'});
      }
    }
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      console.log('user', user);
    });

    return subscriber;
  }, []);

  return (
    <AuthLayout>
      <AuthHeader activeTab="registration" />
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        validationSchema={RegistrationSchema()}
        onSubmit={(value, formikHelpers) => {
          registerUser(value.email, value.password, formikHelpers);
        }}>
        {({
          values,
          setFieldValue,
          handleSubmit,
          isValid,
          errors,
        }: FormikValues) => (
          <>
            <View style={styles.formContainer}>
              <Input
                onFocus={() =>
                  setTouched(prevState => ({...prevState, email: true}))
                }
                value={values.email}
                onChangeText={value => {
                  setFieldValue('email', value);
                }}
                placeholder={'Email'}
                error={touched.email && errors.email}
              />
              <Input
                onFocus={() =>
                  setTouched(prevState => ({...prevState, password: true}))
                }
                value={values.password}
                onChangeText={value => {
                  setFieldValue('password', value);
                }}
                placeholder={'Password'}
                error={touched.password && errors.password}
                secureTextEntry={true}
              />
              <Input
                onFocus={() =>
                  setTouched(prevState => ({
                    ...prevState,
                    confirmPassword: true,
                  }))
                }
                value={values.confirmPassword}
                onChangeText={value => {
                  setFieldValue('confirmPassword', value);
                }}
                placeholder={'Confirm Password'}
                error={touched.confirmPassword && errors.confirmPassword}
                secureTextEntry={true}
              />
            </View>
            <DefaultButton
              disabled={
                !isValid ||
                !values.email ||
                !values.password ||
                !values.confirmPassword
              }
              onPress={handleSubmit}
              text={'Зареєструватись'}
            />
          </>
        )}
      </Formik>
    </AuthLayout>
  );
};
export default RegisterPage;
