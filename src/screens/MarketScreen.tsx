import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Colors, Size, Spacing} from '../themes/themes';
import AppIcon from '../components/Icon';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {fetchMarketsAndTickers} from '../redux/reducers/marketSlice';
import {useAppSelector} from '../hooks/useAppSelector';
import {MarketItem} from '../types/market';
import TokenItem from '../components/TokenItem';
import HeaderFiltered from '../components/HeaderFiltered';
import ScreenContainer from '../components/ScreenContainer';

const MarketScreen = () => {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState('BTC');
  const {loading, mergedData} = useAppSelector(state => state.market);

  const filterList = useMemo(() => Object.keys(mergedData) || [], [mergedData]);
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const selectedData = useMemo(() => {
    const data = mergedData[selected] || [];
    return data.slice(0, page * ITEMS_PER_PAGE);
  }, [mergedData, selected, page]);

  const loadMore = useCallback(() => {
    if (selectedData.length < (mergedData[selected] || []).length) {
      setPage(prev => prev + 1);
    }
  }, [selectedData.length, mergedData, selected]);

  useEffect(() => {
    dispatch(fetchMarketsAndTickers());
  }, [dispatch]);

  const renderItem = useCallback(
    ({item}: {item: MarketItem}) => <TokenItem item={item} />,
    [],
  );

  const renderMarketItem = useCallback(
    ({item}: {item: string}) => (
      <HeaderFiltered
        item={item}
        selected={selected}
        setSelected={setSelected}
      />
    ),
    [selected],
  );

  const renderEmptyView = useCallback(
    () => (
      <View style={styles.emptyView}>
        <ActivityIndicator color={Colors.darkBlue} size={'small'} />
      </View>
    ),
    [],
  );

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MARKETS</Text>
        <TouchableOpacity>
          <AppIcon icon={'search'} color={Colors.grey} iconStyle={'solid'} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrap}>
        <FlatList
          data={filterList}
          keyExtractor={(item, index) => item.toString() + index}
          renderItem={renderMarketItem}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <FlatList
        data={selectedData}
        removeClippedSubviews
        windowSize={5}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyView}
        onEndReached={({distanceFromEnd}) => {
          if (distanceFromEnd < 0) return;
          loadMore();
        }}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey2,
    paddingHorizontal: Spacing.L,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.L,
  },
  title: {fontSize: Size.size_18, fontWeight: 'bold'},
  wrap: {flexDirection: 'row', marginBottom: Spacing.L},
  emptyView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default MarketScreen;
