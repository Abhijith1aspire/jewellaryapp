import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const BestSellerPin = () => {
  return (
    <View
      style={{
        height: 30,
        width: 95,
        backgroundColor: '#FDF2F2',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#900',
        flexDirection: 'row',
        marginRight: 20,
        borderRadius: 5,
      }}>
      <Icon name="star" size={18} color="#900" />
      <Text style={{color: '#900', fontSize: 10, textAlign: 'center'}}>
        BEST SELLER
      </Text>
    </View>
  );
};

export default BestSellerPin;

const styles = StyleSheet.create({});
