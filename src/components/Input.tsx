import React, {memo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  TextInputProps,
} from 'react-native';
import {Colors, Radius, Size, Spacing} from '../themes/themes';
import AppIcon from './Icon';

interface InputProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (txt: string) => void;
  leftIcon?: string;
  rightIcon?: string;
  iconStyle?: any;
  rightIconPress?: () => void;
  showPassword?: boolean;
}

const AppInput: React.FC<InputProps> = ({
  placeholder = '',
  value = '',
  onChangeText,
  leftIcon,
  rightIcon,
  rightIconPress,
  iconStyle,
  showPassword,
  ...inputProps
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {leftIcon ? (
          <AppIcon
            color={Colors.white}
            icon={leftIcon}
            style={styles.leftIcon}
            iconStyle={iconStyle}
          />
        ) : null}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.placeholder}
          value={value}
          onChangeText={onChangeText}
          {...inputProps}
        />
        {rightIcon ? (
          <TouchableOpacity onPress={rightIconPress}>
            <AppIcon
              color={Colors.white}
              icon={rightIcon}
              style={styles.rightIcon}
              iconStyle={iconStyle}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.lightGrey,
    padding: Spacing.M,
    borderRadius: Radius.M,
    borderWidth: 1.5,
    borderColor: Colors.lightGrey,
    alignItems: 'center',
  },
  label: {
    color: Colors.white,
    marginBottom: 5,
  },
  input: {
    color: Colors.white,
    fontSize: Size.size_16 - 1,
    fontWeight: '500',
    flex: 1,
  },
  leftIcon: {paddingRight: Spacing.S + 1},
  rightIcon: {},
});

export default memo(AppInput);
