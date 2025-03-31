import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {logout} from '../redux/reducers/authSlice';
import {Size, Spacing} from '../themes/themes';
import {MainStackNavigation} from '../navigation/AppNavigation';

const HomeScreen = (props: MainStackNavigation) => {
  const {navigation} = props || {};
  const dispatch = useAppDispatch();

  const goToMarket = () => {
    navigation.navigate('Markets', {});
  };

  const handleLogout = () => {
    navigation.navigate('Login', {});
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToMarket} style={styles.logout}>
        <Text style={styles.txt}>Go to Markets Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} style={styles.logout}>
        <Text style={styles.txt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  logout: {
    paddingTop: Spacing.M,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: Size.size_16,
  },
});

export default HomeScreen;
