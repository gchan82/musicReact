import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

import * as actions from '../actions/index';

export default class StorageScreen extends React.Component {
  static navigationOptions = {
    title: 'Storage',
  };

  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  async storeData() {
    const data = {
      value: 'Some testing data'
    }

    const value = await actions.storeData('someKey', data);

    if (value) {

    }
  }

  async retrieveData() {
    this.setState({
      value: ''
    });

    const data = await actions.retrieveData('favoriteAlbums');

    if (data) {
      debugger;
      console.log(data);
      // this.setState({
      //   value: data.value
      // })
    }
  }

  async removeData() {
    const success = await actions.clearStorage();

    if (success) {
      this.setState({ value: '' })
    }
  }

  render() {
    const { value } = this.state;

    return (
      <ScrollView style={styles.container}>
        <Text>I am a storage screen!</Text>
        <Button title='Store data' onPress={() => { this.storeData() }} />
        <Button title='Retrieve data' onPress={() => { this.retrieveData() }} />
        <Button title='Remove data' onPress={() => { this.removeData() }} />

        <Text>{value}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
