import React from 'react';
import { SafeAreaView } from 'react-native';

import HeaderBar from './components/HeaderBar'

const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <HeaderBar />
  </SafeAreaView>
)

export default Home