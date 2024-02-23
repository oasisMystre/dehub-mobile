import { Address } from '@/lib/web3/types';

export type AccountInfo = {
  address: Address;
  email: string | null;
  username: string;
  displayName: string;
  avatarImageUrl?: string;
  coverImageUrl?: string;
  aboutMe: string | null;
  balanceData: any[];
  uploads: number;
  customs: Record<string, any>;
  discordLink: string | null;
  facebookLink: string | null;
  instagramLink: string | null;
  telegramLink: string | null;
  twitterLink: string | null;
  tiktokLink: string | null;
  youtubeLink: string | null;
  likes: Address[];
  followers: Address[];
  followings: Address[];
};
