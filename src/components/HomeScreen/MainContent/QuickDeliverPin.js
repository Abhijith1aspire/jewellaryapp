import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const QuickDeliveryPin = () => {
  return (
    <View
      style={{
        height: 30,
        width: 105,
        backgroundColor: '#fad2bb',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#f7c7bc',
        flexDirection: 'row',
        marginRight: 20,
        borderRadius: 5,
      }}>
      <Icon name="truck" size={18} color="#f77c2a" />
      <Text
        style={{
          color: '#f77c2a',
          fontSize: 10,
          textAlign: 'center',
          marginLeft: 5,
        }}>
        QUICK DELIVERY
      </Text>
    </View>
  );
};

export default QuickDeliveryPin;

const styles = StyleSheet.create({});
