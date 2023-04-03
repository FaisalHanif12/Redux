

import React from 'react';
import {Provider } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Counter from './Src/Counter';
import { store } from './Src/store/store';

const App=()=>{
  return(
    <Provider store={store}> 
    <Counter/>
    </Provider>
  )
}

const styles = StyleSheet.create({
 
});

export default App;
