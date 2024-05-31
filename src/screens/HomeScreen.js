import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/HomeScreen/Header/Header';
import MainContent from '../components/HomeScreen/MainContent/MainContent';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <MainContent />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Optional: set a background color
  },
  container: {
    flex: 1,
  },
});
