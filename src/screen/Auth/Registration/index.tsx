import React, {useState} from 'react';
import {View} from 'react-native';
import styles from '../styles';
import AuthHeader from '../components/AuthHeader/AuthHeader';
import AuthLayout from '../components/AuthLayout/AuthLayout';
import Input from '../../../common/components/Input';
import DefaultButton from '../../../common/components/DefaultButton';
import {Formik, FormikValues} from 'formik';
import {RegistrationSchema} from '../utils/validation';

interface ITouched {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

const RegisterPage = () => {
  const [touched, setTouched] = useState<ITouched>({
    email: false,
    password: false,
    confirmPassword: false,
  });

  return (
    <AuthLayout>
      <AuthHeader activeTab="registration" />
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        validationSchema={RegistrationSchema()}
        onSubmit={value => {
          console.log('value', value);
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
