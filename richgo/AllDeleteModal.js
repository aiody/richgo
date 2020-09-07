import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'modal-enhanced-react-native-web';

export default function AllDeleteModal(props) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='none'
        transparent={true}
        isVisible={props.isVisible}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            관심 아파트 리스트가 전체 삭제 됩니다.
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => {
                props.setModalVisible(!props.isVisible);
              }}
            >
              <Text style={styles.buttonText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.OKButton]}
              onPress={() => {
                props.setModalVisible(!props.isVisible);
                props.deleteAllBookmarks();
              }}
            >
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  modalView: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    elevation: 5
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    margin: 5,
    justifyContent: 'center',
    height: 45,
    width: 140
  },
  OKButton: {
    backgroundColor: '#3497FD'
  },
  cancelButton: {
    backgroundColor: '#78849E'
  },
  modalText: {
    margin: 40,
    marginHorizontal: 45,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333D48',
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
