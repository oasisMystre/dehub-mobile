import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { NFT } from '@/lib/api/models';

export type NFTFeed = {
  id: string;
  results: NFT[];
};

export const feedAdapter = createEntityAdapter<NFTFeed>();

export const feedSlice = createSlice({
  name: 'feed',
  initialState: () => ({}),
  reducers: {},
  extraReducers(_builder) {
    //
  },
});

export const feedActions = feedSlice.actions;
