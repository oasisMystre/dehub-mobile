import { AxiosInstance } from 'axios';

export abstract class ApiImpl {
  constructor(protected axios: AxiosInstance) {}

  buildPath(...value: string[]) {
    return value.join('/');
  }
}
