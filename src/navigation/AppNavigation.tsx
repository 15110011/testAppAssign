import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import {useAppSelector} from '../hooks/useAppSelector';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: any;
};

export type MainStackNavigation = NativeStackNavigationProp<RootStackParamList>;

export const AppNavigation = () => {
  const {accessToken, user} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      {user && accessToken ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
