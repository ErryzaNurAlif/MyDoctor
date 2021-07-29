import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets/assets';
import {Button} from '../../components/components';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title1}>
          Konsultasi dengan dokter jadi lebih 
        </Text>  
        <Text style={styles.title2}> 
          mudah & fleksibel
        </Text>  
      </View>
      <View>
        <Button title="Get Started" /> 
        <View style={{height:16}}/>
        <Button type="secondary" title="Sign In"  /> 
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page:{
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title1:{
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    marginTop: 91,
  },
  title2:{
    fontSize: 28,
    fontWeight: '600',
    color: 'white'
  }
});
