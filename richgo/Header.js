import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/status-bar.png')}
        style={{
          paddingLeft: 170,
          paddingRight: 170,
          padding: 8,
          margin: 10,
          resizeMode: 'contain'
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          margin: 5
        }}
      >
        <Image
          source={require('./assets/logo.png')}
          style={{
            paddingLeft: 69,
            paddingRight: 69,
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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderRadius: 10,
          width: 350,
          borderColor: 'lightgray',
          borderWidth: 1,
          padding: 7,
          margin: 10
        }}
      >
        <Image
          source={require('./assets/icon-search.png')}
          style={{
            marginLeft: 3,
            marginRight: 3,
            padding: 18,
            resizeMode: 'contain'
          }}
        />
        <Image
          source={require('./assets/search-divider.png')}
          style={{
            paddingTop: 12,
            paddingBottom: 12,
            padding: 0.5,
            resizeMode: 'contain',
            marginRight: 10
          }}
        />
        <TextInput
          style={{}}
          placeholder='미래가격 볼 아파트명 입력'
        ></TextInput>
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
  }
});
