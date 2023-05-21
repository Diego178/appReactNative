import React from 'react';
import { View } from 'react-native';
import Main from './src/Components/Main.jsx'
import Constants from 'expo-constants' 
import { NativeRouter } from 'react-router-native';

export default function App () {
  return (
    <NativeRouter>
      <View style={{marginTop: Constants.statusBarHeight}}>
        <Main />
      </View>
    </NativeRouter>
    
  )
}

