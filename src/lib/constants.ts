import Linking from 'expo-linking';
import Constants, { AppOwnership } from 'expo-constants';

export const scheme = 'dehub';

export const resolvedRedirectUrl = [
  AppOwnership.Expo,
  AppOwnership.Guest,
].includes(Constants.appOwnership as any)
  ? Linking.createURL('web3auth', {})
  : Linking.createURL('web3auth', { scheme });
