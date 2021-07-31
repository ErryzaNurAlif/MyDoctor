import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, fonts} from '../../../utils/utils';
import IconOnly from './iconOnly';

const Button = ({type, title, onPress, icon}) => {
  if(type === 'icon-only'){
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.textButton(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  textButton: type => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
