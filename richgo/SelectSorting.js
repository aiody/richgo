import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'modal-enhanced-react-native-web';

export default function SelectSorting(props) {
  return (
    <Modal
      animationType='none'
      transparent={true}
      isVisible={props.isVisible}
      style={{ margin: 0 }}
    >
      <View style={styles.modalView}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.divider}>
            <Text style={styles.titleText}>정렬 선택</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            position: 'absolute',
            top: 23,
            right: 3
          }}
          onPress={() => {
            props.setModalVisible(!props.isVisible);
          }}
        >
          <Image
            source={require('./assets/icon-close-modal.png')}
            style={{
              padding: 12,
              resizeMode: 'contain'
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.selectedButton}>
          <View style={styles.divider}>
            <Text style={styles.selectedText}>최근 추가된 순서</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={[styles.divider, { flexDirection: 'row' }]}>
            <Image
              source={require('./assets/icon-order-by-residence-score.png')}
              style={{
                padding: 12,
                resizeMode: 'contain',
                marginRight: 3
              }}
            />
            <Text style={styles.unselectedText}>거주 점수 높은 순서</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={[styles.divider, { flexDirection: 'row' }]}>
            <Image
              source={require('./assets/icon-order-by-investment-score.png')}
              style={{
                padding: 12,
                resizeMode: 'contain',
                marginRight: 3
              }}
            />
            <Text style={styles.unselectedText}>투자 점수 높은 순서</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: '47%',
    width: '100%',
    elevation: 5,
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 0
  },
  button: {
    width: '100%'
  },
  selectedButton: {
    backgroundColor: '#3497FD0D',
    width: '100%'
  },
  divider: {
    marginHorizontal: 15,
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#78849E1A'
  },
  titleText: {
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A2E43',
    textAlign: 'left'
  },
  selectedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3497FD',
    textAlign: 'left'
  },
  unselectedText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#2A2E43',
    textAlign: 'left'
  }
});
