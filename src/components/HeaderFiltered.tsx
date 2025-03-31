import React, {memo} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Size} from '../themes/themes';

const HeaderFiltered = ({
  item,
  selected,
  setSelected,
}: {
  item: string;
  selected: string;
  setSelected: (item: string) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setSelected(item)}
      style={[
        styles.cateWrap,
        {
          backgroundColor:
            selected === item ? Colors.lightPurple : Colors.blueGrey,
        },
      ]}>
      <Text
        style={[
          styles.cateItem,
          {
            color: selected === item ? Colors.white : Colors.blueGrey2,
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cateWrap: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  cateItem: {
    fontWeight: '500',
    fontSize: Size.size_13,
  },
});

export default memo(HeaderFiltered);
