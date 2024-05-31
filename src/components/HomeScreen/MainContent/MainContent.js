import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import HorizontalScroll from './HorizontalScroll';
import JewellaryItems from './JewellaryItems';
import Filters from './Filters';
import Banner from './Banner';

const MainContent = () => {
  return (
    <ScrollView contentContainerStyle={styles.mainContent}>
      <HorizontalScroll />
      <Filters />
      <Banner />
      <JewellaryItems />
    </ScrollView>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  mainContent: {
    alignItems: 'center',
    backgroundColor: '#FDF2F2',
  },
});
