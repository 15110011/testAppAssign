import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WalletScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default WalletScreen;
