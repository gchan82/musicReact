import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CardList } from '../components/CardList';

import * as actions from '../actions';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums',
  };

  constructor() {
    super();

    this.state = {
      albums: null
    }

    actions.searchTracks('eminem').then(albums => this.setState = ({ albums }));
  }



  render() {
    const { albums } = this.state;
    return (
      <ScrollView style={styles.container}><CardList data={albums} imageKey={'cover_big'} titleKey={'title'} buttonText="See the details" /></ScrollView>
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
