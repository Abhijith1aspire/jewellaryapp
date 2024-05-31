import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import StarIcon from 'react-native-vector-icons/FontAwesome';
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import ShoppingBagIcon from 'react-native-vector-icons/Feather';
import MenuIcon from 'react-native-vector-icons/Feather';

const LogoHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <MenuIcon
          name="menu"
          size={25}
          color="#900"
          style={[styles.icon, {marginLeft: 0}]}
        />
        <Image
          style={styles.logo}
          source={require('../../../assets/images/grt.png')}
        />
      </View>
      <View style={styles.iconContainer}>
        <StarIcon name="star-o" size={25} color="#900" style={styles.icon} />
        <AccountIcon
          name="account-outline"
          size={30}
          color="#900"
          style={styles.icon}
        />
        <LikeIcon name="hearto" size={25} color="#900" style={styles.icon} />
        <ShoppingBagIcon
          name="shopping-bag"
          size={25}
          color="#900"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
});
