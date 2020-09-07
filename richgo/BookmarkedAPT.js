import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import ElementOfAPT from './ElementOfAPT';
import AllDeleteBoxWithArrow from './AllDeleteBoxWithArrow';
import AllDeleteModal from './AllDeleteModal';
import SelectSorting from './SelectSorting';

class BookmarkedAPT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnSettings: false,
      isAllDeleteModalVisible: false,
      isSortingOrderModalVisible: false
    };
  }

  setAllDeleteModalVisible = (visible) => {
    this.setState({ isAllDeleteModalVisible: visible });
  };

  setSortingOrderModalVisible = (visible) => {
    this.setState({ isSortingOrderModalVisible: visible });
  };

  onPressSettings = () => {
    let newIsOnSettings = this.state.isOnSettings ^ true;
    this.setState({ isOnSettings: newIsOnSettings });
  };

  render() {
    const {
      isOnSettings,
      isAllDeleteModalVisible,
      isSortingOrderModalVisible
    } = this.state;
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: '#F7F7FA', paddingTop: 25 }
        ]}
      >
        <View
          style={[
            styles.container,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
              alignItems: 'center'
            }
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
            <Text
              style={{ fontSize: 22, fontWeight: 'bold', color: '#333D48' }}
            >
              관심 아파트
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#78849E'
            }}
          >
            총 11개
          </Text>
        </View>

        <View style={{ flexDirection: 'row', paddingBottom: 8 }}>
          <TouchableOpacity
            style={[styles.button, { height: 40, width: 250 }]}
            onPress={() => {
              this.setSortingOrderModalVisible(true);
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <Text
                style={{ alignSelf: 'center', fontSize: 16, color: '#2A2E43' }}
              >
                최근 추가된 순서
              </Text>
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

          <TouchableOpacity
            style={[styles.button, { height: 40, width: 90 }]}
            onPress={this.onPressSettings}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('./assets/icon-settings.png')}
                style={{
                  marginLeft: 4,
                  marginRight: 3,
                  padding: 12,
                  resizeMode: 'contain'
                }}
              />
              <Text style={{ fontSize: 16, color: '#333D48' }}>설정</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <ElementOfAPT></ElementOfAPT>
          <ElementOfAPT></ElementOfAPT>
          <ElementOfAPT></ElementOfAPT>
          <ElementOfAPT></ElementOfAPT>
        </ScrollView>

        {isOnSettings ? (
          <AllDeleteBoxWithArrow
            onPressSettings={this.onPressSettings}
            setModalVisable={this.setAllDeleteModalVisible}
          ></AllDeleteBoxWithArrow>
        ) : (
          <></>
        )}
        <AllDeleteModal
          isVisible={isAllDeleteModalVisible}
          setModalVisible={this.setAllDeleteModalVisible}
        />
        <SelectSorting
          isVisible={isSortingOrderModalVisible}
          setModalVisible={this.setSortingOrderModalVisible}
        />
      </View>
    );
  }
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
    backgroundColor: 'white',
    borderColor: '#78849E66',
    borderWidth: 1,
    justifyContent: 'center',
    shadowRadius: 16,
    shadowColor: '#455B63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08
  }
});

export default BookmarkedAPT;
