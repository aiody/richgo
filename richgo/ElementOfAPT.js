import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ElementOfAPT() {
  return (
    <View style={styles.item}>
      <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#F4F4F6',
            padding: 15
          }}
        >
          <View
            style={{
              flex: 0.4
            }}
          >
            <Image
              source={require('./assets/img-element-apt.png')}
              style={{
                padding: 58,
                borderRadius: 12,
                resizeMode: 'strech'
              }}
            />
            <Image
              source={require('./assets/icon-star.png')}
              style={{
                paddingHorizontal: 14,
                padding: 14,
                resizeMode: 'contain',
                position: 'absolute'
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 10,
              flex: 0.6,
              justifyContent: 'space-between'
            }}
          >
            <Image
              source={require('./assets/more-vertical-alt.png')}
              style={{
                paddingVertical: 8,
                padding: 2,
                resizeMode: 'contain',
                position: 'absolute',
                right: 0
              }}
            />
            <Text
              style={{
                fontSize: 18,
                marginBottom: 8,
                color: '#333D48',
                fontWeight: 'bold'
              }}
            >
              반포 자이
            </Text>
            <Text style={{ fontSize: 14, color: '#78849E' }}>
              서울시 강남구 서초
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#78849E'
              }}
            >
              23년차·9934세대
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginTop: 13
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: 'bold', color: '#333D48' }}
              >
                34평 / 매매
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: 'normal', color: '#333D48' }}
              >
                실거래
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: 'bold', color: '#333D48' }}
              >
                14.92천
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', padding: 15 }}>
          <View style={{ flex: 0.4 }}>
            <Image
              source={require('./assets/img-graph.png')}
              style={{
                paddingHorizontal: 56,
                padding: 32,
                resizeMode: 'contain'
              }}
            />
          </View>
          <View style={{ flexDirection: 'column', marginLeft: 10, flex: 0.6 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                marginTop: 5
              }}
            >
              <Text style={{ fontSize: 14, marginRight: 20, color: '#5872FF' }}>
                거주 점수
              </Text>
              <Text
                style={{ fontSize: 18, color: '#5872FF', fontWeight: 'bold' }}
              >
                82점
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline'
              }}
            >
              <Text style={{ fontSize: 14, marginRight: 20, color: '#5872FF' }}>
                투자 점수
              </Text>
              <Text
                style={{ fontSize: 18, color: '#5872FF', fontWeight: 'bold' }}
              >
                73점
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 348,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowRadius: 16,
    shadowColor: '#455B63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08
  }
});
