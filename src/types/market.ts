export interface MarketItem {
  id: number;
  marketId: string;
  marketName: string;
  baseCurrency: string;
  marketCurrency: string;
  marketCurrencyLong: string;
  ceiling: string;
  floor: string;
  baseIncrement: null;
  quoteIncrement: null;
  baseMinSize: null;
  baseMaxSize: null;
  tradingStatus: string;
  listRoles: null;
  baseCurrencyTruncate: number;
  priceTruncate: number;
  quoteCurrencyTruncate: number;
  percentChange?: number;
  lastPrice?: string;
}

export interface Markets {
  title: string;
  list: MarketItem[];
}

export interface TickerItem {
  marketId: number;
  market: string;
  askPrice: string;
  bidPrice: string;
  lastPrice: string;
  openPrice: string;
  prevPrice: string;
  high: string;
  low: string;
  volume: string;
  listRoles: null;
  minichartUrl: string;
  change24h: number;
}
