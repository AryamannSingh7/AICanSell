import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Template from './components/Template';
import Homepage from './components/Homepage';
import PageFive from './components/PageFive';
import PageSix from './components/PageSix';
import PageSeven from './components/PageSeven';

const App = () => {
  return (
    <View>
      {/* <Homepage /> */}
      {/* <PageFive /> */}
      {/* <PageSix /> */}
      <PageSeven />
    </View>
  );
};

const styles = StyleSheet.create({
  test: {fontFamily: 'Inter-Bold'},
});

export default App;
