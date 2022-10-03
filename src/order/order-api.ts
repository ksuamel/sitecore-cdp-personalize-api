import { CdpHttpClient } from '../base/cdp-http-client';
import { CdpConfiguration } from '../types';

export class OrderApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  locate = (
    guestRef: string,
    queryParams: Record<string, unknown>
  ): Promise<unknown> => {
    return this.get('orders', {
      guestRef: guestRef,
      ...queryParams,
    });
  };
  retrieve = (orderRef: string): Promise<unknown> => {
    return this.get(`orders/${orderRef}`);
  };
  create = (
    guestRef: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`guests?guestRef=${guestRef}`, body);
  };
}
