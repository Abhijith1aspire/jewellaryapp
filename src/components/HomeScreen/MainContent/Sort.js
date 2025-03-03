import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Sort = () => {
  return (
    <View
      style={{
        height: 30,
        width: 105,
        backgroundColor: '#FDF2F2',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#900',
        flexDirection: 'row',
        marginLeft: 20,
        borderRadius: 5,
      }}>
      <Icon name="filter-variant" size={20} />
      <Text
        style={{
          color: '#900',
          fontSize: 14,
          textAlign: 'center',
          marginLeft: 5,
        }}>
        Sort
      </Text>
    </View>
  );
};

export default Sort;

const styles = StyleSheet.create({});
