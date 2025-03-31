import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Colors, Radius, Size, Spacing} from '../themes/themes';

interface CheckboxProps {
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
  title?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked = false,
  onChange,
  title,
}) => {
  const [checked, setChecked] = useState(isChecked);

  const handlePress = () => {
    setChecked(!checked);
    onChange?.(!checked);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <View style={styles.checkmark} />}
      </View>
      {title ? <Text style={styles.title}>{title}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.S,
    borderRadius: Radius.XS + 1,
    backgroundColor: Colors.lightGrey,
    borderWidth: 1.5,
    borderColor: Colors.lightGrey,
  },
  checked: {
    backgroundColor: Colors.lightGrey,
    borderColor: Colors.lightGrey,
  },
  checkmark: {
    width: Size.size_12,
    height: Size.size_12,
    backgroundColor: Colors.white,
    borderRadius: Radius.XS,
  },
  title: {
    color: Colors.white,
    fontSize: Size.size_14,
    fontWeight: '500',
  },
});

export default Checkbox;
