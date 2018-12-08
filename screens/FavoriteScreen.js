import React from 'react';
import { ScrollView, StyleSheet, View, Linking } from 'react-native';
import { Card, Button, List, ListItem, Icon } from 'react-native-elements';

import * as actions from '../actions/index';
import _ from 'lodash';

export default class FavoriteScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorite Albums',
  };

  constructor() {
    super();

    this.state = {
      favoriteAlbums: undefined,
      favoriteTracks: undefined
    }

    this.getFavoriteAlbums();
    this.getFavoriteTracks();
  }

  async getFavoriteTracks() {
    const favoriteTracks = await actions.retrieveData('favoriteTracks');

    if (favoriteTracks) {
      this.setState({ favoriteTracks });
    }
  }

  async getFavoriteAlbums() {
    const favoriteAlbums = await actions.retrieveData('favoriteAlbums');

    if (favoriteAlbums) {
      this.setState({ favoriteAlbums });
    }
  }

  renderFavoriteTracks(tracks) {
    const { favoriteTracks } = this.state;

    if (tracks) {
      return _.map(tracks, (track, id) => {
        return (
          <ListItem
            key={id}
            title={track.title}
            leftIcon={{ name: 'play-arrow'}}
            rightIcon={
              <Icon
                raised
                name='music'
                type='font-awesome'
                color='#f50'
                onPress={() => Linking.openURL(track.preview)}
              />
            } />
        )
      });
    }
  }

  renderFavoriteAlbums() {
    const { favoriteAlbums } = this.state;

    if (favoriteAlbums) {
      return _.map(favoriteAlbums, (album, id) => {
        return (
          <View>
            <Card
              key={id}
              title={album.title}
            >
              <Button
                title='Delete album'
                raised
                backgroundColor='#f50'
                name='trash'
                onPress={() => { }}
              />
              {this.renderFavoriteTracks(album.tracks)}
            </Card>
          </View>
        )
      });
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <List containerStyle={styles.listContainer}>
          {this.renderFavoriteAlbums()}
        </List>
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
  listContainer: {
    backgroundColor: '#eaeaea'
  }
});
