

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import { addition, subtraction } from './store/action';

const Counter=()=>{

  const data = useSelector((state)=> state.count);

  const dispatch = useDispatch();
  return(
    <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
      <Button title='Add'
       onPress={()=>dispatch(addition())}
      />
        <Text>
          {data}
        </Text>
      <Button title='Subtract' 
      onPress={()=>dispatch(subtraction())}
      />
    </View>
  )
}

const styles = StyleSheet.create({
 
});

export default Counter;
