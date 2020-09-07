import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Content(props) {
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.onPressSettings();
          props.setModalVisable(true);
        }}
      >
        <View style={styles.triangle} />
        <View style={styles.triangle2} />
        <View style={[styles.container, { flexDirection: 'row' }]}>
          <View
            style={{ position: 'relative', backgroundColor: '#88b7d5' }}
          ></View>
          <Image
            source={require('./assets/icon-delete.png')}
            style={{
              padding: 12,
              marginRight: 3,
              resizeMode: 'contain'
            }}
          />
          <Text style={{ fontSize: 16, color: '#fff' }}>전체 삭제</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 8,
    padding: 10,
    margin: 3,
    justifyContent: 'center',
    position: 'absolute',
    width: 135,
    height: 67,
    backgroundColor: '#353A50',
    top: 145,
    right: 10,
    borderColor: '#303640',
    borderWidth: 1,
    shadowRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.16
  },
  triangle: {
    width: 10,
    height: 10,
    position: 'absolute',
    top: -10,
    right: 30,
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
    borderBottomWidth: 10,
    borderBottomColor: '#303640'
  },
  triangle2: {
    width: 10,
    height: 10,
    position: 'absolute',
    top: -10,
    right: 30,
    borderLeftWidth: 9,
    borderLeftColor: 'transparent',
    borderRightWidth: 9,
    borderRightColor: 'transparent',
    borderBottomWidth: 9,
    borderBottomColor: '#353A50'
  }
});
