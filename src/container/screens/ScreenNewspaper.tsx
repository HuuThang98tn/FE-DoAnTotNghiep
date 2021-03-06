import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import ArrayColors from '../../res/colors/ArrayColors';

const ScreenNewspaper = () => {
  const {mContainer} = styles;
  return (
    <SafeAreaView style={mContainer}>
     
      <View
        style={{flex: 1, backgroundColor: ArrayColors._color_orange}}></View>
    </SafeAreaView>
  );
};

export default ScreenNewspaper;

const styles = StyleSheet.create({
  mContainer: {
    flex: 1,
    backgroundColor: ArrayColors._color_white,
  },
});
