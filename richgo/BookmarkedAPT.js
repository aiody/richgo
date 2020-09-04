import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { Button } from 'native-base';
import ElementOfAPT from './ElementOfAPT';

export default function BookmarkedAPT() {
  return (
    <View style={[styles.container, { backgroundColor: 'lightgray' }]}>
      <View
        style={[
          styles.container,
          { flexDirection: 'row', justifyContent: 'space-between', padding: 15 }
        ]}
      >
        <View style={[styles.container, { flexDirection: 'row' }]}>
          <Image
            source={require('./assets/icon-star.png')}
            style={{
              padding: 14,
              resizeMode: 'contain'
            }}
          />
          <Text>관심 아파트</Text>
        </View>
        <Text>총 11개</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={[styles.button, { height: 40, width: 250 }]}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <Text style={styles.buttonText}>최근 추가된 순서</Text>
            <Image
              source={require('./assets/icon-open-arrow.png')}
              style={{
                padding: 4,
                resizeMode: 'contain',
                position: 'absolute',
                right: 10,
                alignSelf: 'center'
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { height: 40, width: 80 }]}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./assets/icon-settings.png')}
              style={{
                marginRight: 3,
                padding: 12,
                resizeMode: 'contain'
              }}
            />
            <Text style={styles.buttonText}>설정</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <ElementOfAPT></ElementOfAPT>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center'
  },
  buttonText: {
    alignSelf: 'center'
  }
});
