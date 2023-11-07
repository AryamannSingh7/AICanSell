import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Template from './components/Template';
import Homepage from './components/Homepage';
import PageFive from './components/PageFive';

const App = () => {
  return (
    <View>
      {/* <Homepage /> */}
      <PageFive />
    </View>
  );
};

const styles = StyleSheet.create({
  test: {fontFamily: 'Inter-Bold'},
});

export default App;
