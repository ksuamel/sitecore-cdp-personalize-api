import { CdpHttpClient } from '../base/cdp-http-client';
import { PaginatedLocateResponse } from '../base/models/locate-response';
import { CdpConfiguration } from '../types';

export class OrderItemApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  /**
   * Used to locate order items
   * @param orderRef
   * @param queryParams
   * @returns
   */
  locate = (
    orderRef: string,
    queryParams: Record<string, unknown>
  ): Promise<PaginatedLocateResponse> => {
    return this.get(`orders/${orderRef}/orderItems`, queryParams);
  };

  /**
   * Used to retrive order item details
   * @param orderItemRef
   * @param queryParams
   * @returns
   */
  retrieve = <T>(
    orderItemRef: string,
    queryParams: Record<string, unknown>
  ): Promise<T> => {
    return this.get(`orderitems/${orderItemRef}`, queryParams);
  };
  update = (
    orderItemRef: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`orderitems/${orderItemRef}`, body);
  };
  create = (
    orderRef: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`orders/${orderRef}/orderItems`, body);
  };
}
