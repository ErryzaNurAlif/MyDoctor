import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {colors, fonts} from '../../../utils/utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input}  />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input:{
    width: 280,
    height: 45,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12
  }, 
  label:{
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary, 
    marginBottom: 6
  }
});
