import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OtherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OtherScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default OtherScreen;
