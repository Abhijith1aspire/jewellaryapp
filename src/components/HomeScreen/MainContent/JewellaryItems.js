import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {data} from '../../../../data/data';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';

const JewelleryItemRow = ({image, price}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 24,
              width: 24,
              backgroundColor: '#daeff0',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 2,
            }}>
            <Icon name="bookmark" size={18} color="#900" />
          </View>
          <View
            style={{
              height: 24,
              width: 24,
              backgroundColor: '#daeff0',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 2,
            }}>
            <Icon name="star" size={18} color="#900" />
          </View>
        </View>
        <LikeIcon
          name="hearto"
          size={18}
          style={{marginRight: 10}}
          color="#900"
        />
      </View>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.priceText}>₹{price}</Text>
    </View>
  );
};

const JewelleryItems = () => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <JewelleryItemRow
          key={index.toString()}
          image={item.image}
          price={item.price}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  itemContainer: {
    height: 200,
    width: '48%',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: 'black',
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#900',
  },
});

export default JewelleryItems;
