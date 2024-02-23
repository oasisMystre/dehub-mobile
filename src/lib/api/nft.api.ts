import { ApiImpl } from './api';

import { nonNull } from '@/lib/utils';
import { Address } from '@/lib/web3/types';
import { NFT, ResponseWithResult } from './models';

type SearchNFTParams = {
  unit: number;
  page: number;
  sortMode: string;
  minter: Address;
  search: string;
  category: string;
};

type WatchedNFTParams = {
  unit: number;
  address: Address;
  category?: string;
};

export class NFTApi extends ApiImpl {
  getWatchedNfts(params: WatchedNFTParams) {
    return this.axios.get<ResponseWithResult<NFT[]>>('my_watched_nfts', {
      data: nonNull(params),
    });
  }

  getUnlockedNfts(address: Address) {
    return this.axios.get<ResponseWithResult<NFT[]>>(
      this.buildPath('unlocked_nfts', address),
    );
  }

  searchNfts(params: Partial<SearchNFTParams>) {
    return this.axios.get<ResponseWithResult<NFT[]>>('search_nfts', {
      data: nonNull(params),
    });
  }

  getCategories() {
    return this.axios.get<string[]>('get_categories');
  }
}
