import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Radius, Size, Spacing} from '../themes/themes';
import AppIcon from './Icon';
import {MarketItem} from '../types/market';

const TokenItem = ({item}: {item: MarketItem}) => {
  return (
    <View style={styles.itemWrap}>
      <View style={styles.tokenLogo}>
        <Text style={styles.token}>{item.marketCurrency}</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.tokenName}>{item.marketCurrency}</Text>
        <Text style={styles.tokenDesc}>{item.marketCurrencyLong}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.price}>{`$${parseFloat(item?.lastPrice)}`}</Text>
        <View style={styles.wrapPercent}>
          <Text
            style={[
              styles.percent,
              {
                color:
                  Number(item.percentChange) > 0 ? Colors.green : Colors.red,
              },
            ]}>
            {`${Number(item?.percentChange) || 0}%`}
          </Text>
          <AppIcon
            icon={
              item?.percentChange > 0
                ? 'long-arrow-alt-up'
                : 'long-arrow-alt-down'
            }
            color={item?.percentChange > 0 ? Colors.green : Colors.red}
            iconStyle={'solid'}
            size={Size.size_10}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrap: {
    backgroundColor: Colors.white,
    borderRadius: Spacing.S,
    padding: Spacing.L,
    marginBottom: Spacing.M,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tokenName: {
    fontWeight: '700',
    fontSize: Size.size_15,
    color: Colors.darkBlue,
  },
  tokenDesc: {
    color: Colors.blueGrey2,
    fontSize: Size.size_14,
    fontWeight: '500',
  },
  price: {fontWeight: '500', fontSize: Size.size_15, color: Colors.darkBlue},
  percent: {
    fontSize: Size.size_13,
    fontWeight: '500',
    paddingRight: Spacing.XXS,
  },
  wrapPercent: {
    flexDirection: 'row',
    paddingTop: Spacing.S,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {flex: 1},
  tokenLogo: {
    width: 38,
    height: 38,
    marginRight: Spacing.L,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderRadius: Radius.S,
  },
  token: {
    fontSize: Size.size_10,
    fontWeight: 'bold',
    color: Colors.white,
  },
  right: {alignItems: 'flex-end'},
});

export default memo(TokenItem);
