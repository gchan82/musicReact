import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HomeScreen',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title='Navigate to Albums' onPress={() => this.props.navigation.navigate('Albums')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
});
