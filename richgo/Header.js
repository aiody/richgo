import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/status-bar.png')}
        style={{
          paddingHorizontal: 170,
          padding: 8,
          margin: 10,
          resizeMode: 'contain'
        }}
      />

      <View style={styles.titleAndMyInfoView}>
        <Image
          source={require('./assets/logo.png')}
          style={{
            paddingHorizontal: 69,
            padding: 16,
            resizeMode: 'contain',
            flex: 1
          }}
        />
        <Image
          source={require('./assets/icon-my-info.png')}
          style={{
            marginRight: 5,
            padding: 18,
            resizeMode: 'contain',
            position: 'absolute',
            right: 10,
            top: 1
          }}
        />
      </View>

      <View style={styles.textInput}>
        <Image
          source={require('./assets/icon-search.png')}
          style={{
            marginHorizontal: 3,
            padding: 18,
            resizeMode: 'contain'
          }}
        />
        <Image
          source={require('./assets/search-divider.png')}
          style={{
            paddingVertical: 12,
            padding: 0.5,
            resizeMode: 'contain',
            marginRight: 10
          }}
        />
        <TextInput placeholder='미래가격 볼 아파트명 입력'></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  search: {
    flex: 1,
    borderRadius: 10,
    width: 350,
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingLeft: 70,
    padding: 15,
    margin: 10
  },
  titleAndMyInfoView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 5,
    marginTop: 10
  },
  textInput: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    width: 343,
    borderColor: '#78849E66',
    borderWidth: 1,
    padding: 8,
    margin: 10,
    shadowRadius: 16,
    shadowColor: '#455B63',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08
  }
});
