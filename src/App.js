import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import ListaComponent from './components/ListaComponent';
export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <ScrollView>
        <ListaComponent />
      </ScrollView>
    );
  }
}
