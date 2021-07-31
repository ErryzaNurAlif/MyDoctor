import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { colors } from '../../../utils/colors/colors';
import { fonts } from '../../../utils/utils';

const Link = ({title, size, align}) => {
  return (
    <View>
      <Text style={styles.textLink(size, align)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  textLink: (size, align) => (
    {
      fontSize: size,
      fontFamily: fonts.primary.normal,
      color: colors.text.secondary,
      textDecorationLine: 'underline',
      textAlign: align
    }
  )
});
