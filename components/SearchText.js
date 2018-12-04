import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';

export class SearchText extends React.Component {

  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    this.input.focus();

  }

  onChange(value) {
    this.setState({ value });
  }

  onSubmitSearch() {
    const { submitSearch } = this.props;

    submitSearch(this.state.value);
  }

  render() {
    return (
      <React.Fragment>

        <FormInput ref={input => this.input = input} placeholder='Search an Artist' onChangeText={(event) => this.onChange(event)} />
        <FormValidationMessage></FormValidationMessage>
        <Button title='Search' onPress={() => this.onSubmitSearch()} />
      </React.Fragment>
    )
  }
}

