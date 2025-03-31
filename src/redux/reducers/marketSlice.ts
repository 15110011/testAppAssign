import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {getMarketsApi, getSummariesApi} from '../../service/api';
import {Markets, TickerItem} from '../../types/market';
import {AppDispatch} from '../store';

interface MarketState {
  loading: boolean;
  error: string | null;
  marketList: Markets[];
  tickerList: TickerItem[];
  mergedData: any;
}

const initialState: MarketState = {
  loading: false,
  error: null,
  marketList: [],
  tickerList: [],
  mergedData: {},
};

export const getSummaries = createAsyncThunk(
  'summary/getSumaries',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getSummariesApi();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Get summaries failed',
      );
    }
  },
);

export const getMarkets = createAsyncThunk(
  'market/getMarkets',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getMarketsApi();
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Get markets failed',
      );
    }
  },
);

export const fetchMarketsAndTickers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));

    const [marketRes, tickerRes] = await Promise.all([
      getMarketsApi(),
      getSummariesApi(),
    ]);

    dispatch(
      setData({
        marketList: marketRes.data,
        tickerList: tickerRes.data,
      }),
    );

    dispatch(setError(null));
  } catch (error: any) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

const mergeMarketWithTicker = (markets: Markets[], tickers: TickerItem[]) => {
  const newList = markets.map(group => {
    const updatedList = group.list.map(itemList => {
      const matchedItem = tickers.find(t => t.marketId === itemList.id);

      if (matchedItem) {
        const lastPrice = parseFloat(matchedItem.lastPrice) ?? 0;
        const openPrice = parseFloat(matchedItem.openPrice) ?? 0;
        const percentChange =
          (((lastPrice - openPrice) / openPrice) * 100).toFixed(2) || 0;

        return {...itemList, ...matchedItem, percentChange};
      }

      return itemList;
    });
    return {...group, list: updatedList};
  });

  const formatData = newList.reduce((acc, cur) => {
    const key = cur.title;
    acc[key] = cur.list;
    return acc;
  }, []);

  return formatData;
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    setData: (
      state,
      action: PayloadAction<{
        marketList: Markets[];
        tickerList: TickerItem[];
      }>,
    ) => {
      state.marketList = action.payload.marketList;
      state.tickerList = action.payload.tickerList;
      state.mergedData = mergeMarketWithTicker(
        state.marketList,
        state.tickerList,
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});
export const {setData, setLoading, setError} = marketSlice.actions;

export default marketSlice.reducer;
