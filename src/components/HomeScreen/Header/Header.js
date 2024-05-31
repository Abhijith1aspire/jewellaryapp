import {StyleSheet, View} from 'react-native';
import React from 'react';
import MarketPrice from './MarketPrice';
import LogoHeader from './LogoHeader';
import Search from './Search';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <MarketPrice />
      <LogoHeader />
      <View style={{alignItems: 'center'}}>
        <Search />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 2,
  },
});
