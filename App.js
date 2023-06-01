import React from 'react';
import { View } from 'react-native';
import Main from './src/Components/Main.jsx'
import Constants from 'expo-constants' 
import { NativeRouter } from 'react-router-native';
import { ApolloProvider} from '@apollo/client';
import client from './src/Components/utils/apolloClient.js';

const apolloClient = client()

export default function App () {
  
  
  return (
    <ApolloProvider client={apolloClient}>
      <NativeRouter>
        <View style={{marginTop: Constants.statusBarHeight}}>
          <Main />
        </View>
      </NativeRouter>
      </ApolloProvider>
  )
}

