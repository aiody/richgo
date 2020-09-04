import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Button } from 'native-base';

export default function Content() {
  return (
    <View style={{ marginBottom: 10 }}>
      <View style={{ marginBottom: 10 }}>
        <Text>똑똑하게 아파트 찾기</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[styles.button, { height: 130, width: 170 }]}
          >
            <Image
              source={require('./assets/icon-finding-great-apt.png')}
              style={{ padding: 36, resizeMode: 'contain' }}
            />
            <Text style={styles.buttonText}>좋은 아파트 찾기</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity
              style={[styles.button, { height: 60, width: 170 }]}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('./assets/icon-great-location-for-school.png')}
                  style={{
                    padding: 23,
                    resizeMode: 'contain'
                  }}
                />
                <Text style={styles.buttonText}>학군 좋은</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { height: 60, width: 170 }]}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('./assets/icon-find-with-map.png')}
                  style={{
                    padding: 23,
                    resizeMode: 'contain'
                  }}
                />
                <Text style={styles.buttonText}>지도로 탐색</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text>특별한 기능</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.button, { height: 60, width: 170 }]}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('./assets/icon-ranking-of-apt.png')}
                style={{
                  padding: 23,
                  resizeMode: 'contain'
                }}
              />
              <Text style={styles.buttonText}>아파트 랭킹</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { height: 60, width: 170 }]}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('./assets/icon-calculation-holding-tax.png')}
                style={{
                  padding: 23,
                  resizeMode: 'contain'
                }}
              />
              <Text style={styles.buttonText}>보유세 계산</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 15,
    margin: 5,
    backgroundColor: 'gray',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center'
  }
});
