import { ApiImpl } from './api';

import { AccountInfo } from './models/account.model';
import { ResponseWithResult } from './models/response.model';

export default class AccountApi extends ApiImpl {
  async getAccountInfo(identity: string) {
    const {
      data: { result },
    } = await this.axios<ResponseWithResult<AccountInfo>>(
      this.buildPath('account_info', identity),
    );

    return result;
  }
}
