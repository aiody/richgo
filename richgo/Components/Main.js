import React from 'react';
import { StyleSheet, View } from 'react-native';
import BookmarkedAPT from './BookmarkedAPT';
import Header from './Header';
import Content from './Content';

export default function Main() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Content></Content>
      <BookmarkedAPT></BookmarkedAPT>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch'
  }
});
