import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Content() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>똑똑하게 아파트 찾기</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[
              styles.button,
              { height: 130, width: 170, backgroundColor: '#72B7A1' }
            ]}
          >
            <Image
              source={require('./assets/icon-finding-great-apt.png')}
              style={{ padding: 36, resizeMode: 'contain' }}
            />
            <Text style={styles.buttonText}>좋은 아파트 찾기</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity
              style={[
                styles.button,
                { height: 60, width: 170, backgroundColor: '#FE9E9E' }
              ]}
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
              style={[
                styles.button,
                { height: 60, width: 170, backgroundColor: '#3CCDE2' }
              ]}
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
      <View style={styles.container}>
        <Text style={styles.titleText}>특별한 기능</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[
              styles.button,
              { height: 60, width: 170, backgroundColor: '#3898FF' }
            ]}
          >
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
          <TouchableOpacity
            style={[
              styles.button,
              { height: 60, width: 170, backgroundColor: '#3D97BB' }
            ]}
          >
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
  container: {
    marginBottom: 10
  },
  button: {
    borderRadius: 8,
    padding: 15,
    margin: 5,
    justifyContent: 'center',
    shadowRadius: 16,
    shadowColor: '#455B63',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  titleText: {
    margin: 5,
    color: '#333D4B',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
