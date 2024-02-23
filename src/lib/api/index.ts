import axios, { AxiosInstance } from 'axios';
import { NFTApi } from './nft.api';

export default class Api {
  static #api?: Api;

  static get instance() {
    if (!Api.#api) {
      const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL,
      });

      Api.#api = new Api(axiosInstance);
    }

    return Api.#api;
  }

  readonly nft: NFTApi;

  private constructor(axiosInstance: AxiosInstance) {
    this.nft = new NFTApi(axiosInstance);
  }
}
