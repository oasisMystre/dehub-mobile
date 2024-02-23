import type { Address } from '../../web3/types';

export enum NFTStatus {
  MINTED = 'minted',
}

export enum TranscodingStatus {
  DONE = 'done',
}

export type TotalVotes = {
  for: number;
  against: number;
};

export type VideoInfo = {
  w: number;
  h: number;
  bitrate: number;
  channelLayout: string;
  lang: string;
  size: number;
};

type StreamInfo = {
  isPayPerView: boolean;
  payPerViewChainIds: number[];
  payPerViewAmount: number[];
};

export type NFT = {
  chainId: number;
  createdAt: number;
  description: string;
  name: string;
  imageUrl: string;
  likes: number;
  minter: Address;
  mintTxHash: Address;
  minterAvatarUrl: string;
  minterStaked: number;
  mintername: string;
  status: NFTStatus;
  tokenId: number;
  totalTips: number;
  totalVotes: TotalVotes;
  transcodingStatus: TranscodingStatus;
  videoDuration: number;
  videoExt: string;
  videoInfo?: VideoInfo;
  views: number;
  streamInfo?: StreamInfo;
  category: string[]
};
