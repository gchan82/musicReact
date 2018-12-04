import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Text, Icon } from 'react-native-elements';

import * as actions from '../actions';

export default class AlbumDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Album Detail',
  };

  constructor() {
    super();

    this.state = {
      tracks: []
    }
  }

  componentDidMount() {
    const album = this.props.navigation.getParam('album', {});

    actions.getAlbumTracks(album.id).then(
      tracks => this.setState({ tracks }))
      .catch(error => console.error(error))
  }

  render() {
    const album = this.props.navigation.getParam('album', {});
    const artist = this.props.navigation.getParam('artist', '');

    if (album.id) {
      return (

        <ScrollView style={styles.container}>
          <View>
            <Avatar x-large rounded source={{ uri: album.cover_medium }}></Avatar>
            <View>
              <Text h4>{album.title}</Text>
              <Text h4>{artist}</Text>
            </View>
            <Icon raised
              name='play'
              type='font-awesome'
              color='#f50'
              size={30}
              onPress={() => { }}
            />
          </View>
        </ScrollView>
      );
    } else {
      <View><Text>Loading...</Text></View>
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
