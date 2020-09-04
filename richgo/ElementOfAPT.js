import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'native-base';

export default function ElementOfAPT() {
  return (
    <View>
      <View style={styles.item}>
        <Text>반포 자이</Text>
      </View>
      <View style={styles.item}>
        <Text>래미안 퍼스티지</Text>
      </View>
      <View style={styles.item}>
        <Text>래미안 퍼스티지</Text>
      </View>
      <View style={styles.item}>
        <Text>래미안 퍼스티지이</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 330,
    height: 100,
    margin: 10,
    backgroundColor: '#fff'
  }
});
