import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 30,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Move</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({});
