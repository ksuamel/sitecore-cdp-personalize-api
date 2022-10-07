import { CdpHttpClient } from '../base/cdp-http-client';
import { PaginatedLocateResponse } from '../base/models/locate-response';
import { CdpConfiguration } from '../types';

export class OrderApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  /**
   * Used to locate guest's orders
   * @param guestRef
   * @param queryParams
   * @returns
   */
  locate = (
    guestRef: string,
    queryParams: Record<string, unknown>
  ): Promise<PaginatedLocateResponse> => {
    return this.get('orders', {
      guestRef: guestRef,
      ...queryParams,
    });
  };

  /**
   * Used to retrieve order details
   * @param orderRef
   * @returns
   */
  retrieve = <T>(orderRef: string): Promise<T> => {
    return this.get(`orders/${orderRef}`);
  };

  create = (
    guestRef: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`guests?guestRef=${guestRef}`, body);
  };
}
