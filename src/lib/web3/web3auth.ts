import ethers from 'ethers';

import { CHAIN_NAMESPACES } from '@web3auth/base';
import Web3Auth, { OPENLOGIN_NETWORK } from '@web3auth/react-native-sdk';
import {
  EthereumPrivateKeyProvider,
  EthereumPrivKeyProviderConfig,
} from '@web3auth/ethereum-provider';

import WebBrowser from 'expo-web-browser';
import EncryptedStorage from 'expo-secure-store';

type Web3AuthLoginParams = Omit<
  Parameters<Web3Auth['login']>[number],
  'mfaLevel' | 'redirectUrl'
>;

export class Web3AuthNotReadyError extends Error {
  constructor() {
    super('Web3auth not initialized');
  }
}

export class Web3AuthProviderNotSetError extends Error {
  constructor() {
    super('provider not set');
  }
}

export class Web3AuthSignerNotSetError extends Error {
  constructor() {
    super('signer not set');
  }
}

export default class Auth {
  readonly web3auth: Web3Auth;
  private provider?: EthereumPrivateKeyProvider;
  private address?: ethers.ethers.AddressLike;
  private signer?: ethers.ethers.JsonRpcSigner;
  private etherProvider?: ethers.ethers.BrowserProvider;

  static getChainConfig(chainId: string): EthereumPrivKeyProviderConfig {
    return {
      chainConfig: {
        chainId: '',
        rpcTarget: '',
        displayName: '',
        blockExplorerUrl: '',
        ticker: '',
        tickerName: '',
        chainNamespace: CHAIN_NAMESPACES.EIP155,
      },
    };
  }

  constructor() {
    this.web3auth = new Web3Auth(WebBrowser, EncryptedStorage, {
      clientId: process.env.WEB3_AUTH_CLIENT_ID!,
      network: OPENLOGIN_NETWORK.SAPPHIRE_DEVNET,
    });
  }

  async initialize(config: ReturnType<typeof Auth.getChainConfig>) {
    await this.web3auth.init();
    this.provider = new EthereumPrivateKeyProvider({
      config,
    });
    if (this.web3auth.privKey) await this.setupProvider();
  }

  async setupProvider() {
    await this.provider!.setupProvider(this.web3auth.privKey);
  }

  get userInfo() {
    return this.web3auth.userInfo();
  }

  async login(params: Web3AuthLoginParams) {
    if (!this.web3auth.ready) throw new Web3AuthNotReadyError();

    await this.web3auth.login({
      ...params,
      mfaLevel: 'default',
      redirectUrl: process.env.WEB3_AUTH_REDIRECT_URL,
    });

    if (this.web3auth.privKey) await this.setupProvider();

    [this.etherProvider, this.signer, this.address] = await this.getState();
  }

  async getState(): Promise<
    [ethers.ethers.BrowserProvider, ethers.ethers.JsonRpcSigner, string]
  > {
    if (!this.provider) throw new Web3AuthProviderNotSetError();
    const ethersProvider = new ethers.BrowserProvider(this.provider);

    const signer = await ethersProvider.getSigner();
    const address = await signer.getAddress();

    return [ethersProvider, signer, address];
  }

  async getBalance() {
    if (!this.etherProvider) throw new Web3AuthProviderNotSetError();
    if (!this.signer) throw new Web3AuthSignerNotSetError();

    return ethers.formatEther(
      await this.etherProvider!.getBalance(this.address!),
    );
  }

  async signMessage(message: any) {
    if (!this.etherProvider) throw new Web3AuthProviderNotSetError();
    if (!this.signer) throw new Web3AuthSignerNotSetError();

    return this.signer.signMessage(message);
  }

  logout() {
    if (!this.web3auth.ready) throw new Web3AuthNotReadyError();

    return this.web3auth.logout();
  }
}
