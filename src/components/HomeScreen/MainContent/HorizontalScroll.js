import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {jewellary} from '../../../../data/data';

const JewellaryItem = ({jewellary}) => {
  console.log(jewellary);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.item}>
        <Image
          source={{uri: jewellary.image}}
          style={{width: 80, height: 80, resizeMode: 'contain'}}
        />
      </View>
      <Text>{jewellary.title}</Text>
    </View>
  );
};

const HorizontalScroll = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}>
      {jewellary.map((item, index) => {
        return <JewellaryItem key={index.toString()} jewellary={item} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    width: 90,
    height: 90,
    backgroundColor: 'white',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#900',
    borderWidth: 0.2,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default HorizontalScroll;
