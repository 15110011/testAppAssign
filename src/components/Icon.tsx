import React from 'react';
import {Colors, Size} from '../themes/themes';
import {View, StyleSheet} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome5';

export interface IIcons {
  style?: any;
  size?: number;
  color?: string;
  iconStyle?: any;
  icon?: any;
}

const AppIcon: React.FC<IIcons> = props => {
  const {
    color = Colors.white,
    size = Size.size_16,
    style,
    icon = '',
    iconStyle,
  } = props || {};

  return (
    <View style={[styles.container, style]}>
      <Icon name={icon} size={size} color={color} iconStyle={iconStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppIcon;
