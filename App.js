import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      result: 0,
    }
  }
    render(){
      return(
        <View style={styles.container}>
        <Text>Result: {this.state.result}</Text>
        <Button
            title="Increment result"
            onPress={() => {
            this.setState({result : this.state.result + 1});
            }}
          />
          <Button
            title="Decrement result"
            style={styles.button}
            onPress={() => {
            this.setState({result : this.state.result - 1});
            }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
