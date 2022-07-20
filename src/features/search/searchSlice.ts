import { createSlice } from '@reduxjs/toolkit';

import { IDateRange, IOptions } from '../../components/Searchbar';

export interface ISearchState {
  destination: string | null;
  dateRange: IDateRange[];
  options: IOptions;
  min: number;
  max: number;
}

const initialState: ISearchState = {
  destination: null,
  dateRange: [{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }],
  options: {
    adult: 1,
    children: 0,
    room: 1,
  },
  min: 1,
  max: 999,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    newSearch: (state, action) => {
      const { payload } = action;
      state.destination = payload.destination;
      state.dateRange = payload.dateRange;
      state.options = payload.options;
      state.min = payload.min || 1;
      state.max = payload.max || 999;
    },
    resetSearch: () => initialState,
  },
});

export const { newSearch, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
