import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ILLogo} from '../../assets/assets';
import {Button, Gap, Input, Link} from '../../components/components';
import { colors, fonts } from '../../utils/utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Addrress" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} /> 
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp') } />
      <Gap height={30} />
      <Link title="Created New Account" size={20} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page:{
    padding: 40,
    flex: 1,
    backgroundColor: colors.white
  },
  title:{
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 153
  }
});
