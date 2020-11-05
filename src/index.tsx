import React from 'react';
import {SafeAreaView, View} from 'react-native'

import CarrouselCoin from './components/CarrouselCoin'
import ConvertionCoin from './components/ConversionCoin'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CarrouselCoin/>
      <ConvertionCoin/>
    </SafeAreaView>
  );
}
