import { CdpHttpClient } from '../base/cdp-http-client';
import { PaginatedLocateResponse } from '../base/models/locate-response';
import { CdpConfiguration } from '../types';

export class OrderConsumerApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  /**
   * Used to locate order consumers
   * @param orderRef
   * @param queryParams
   * @returns
   */
  locate = (
    orderRef: string,
    queryParams: Record<string, unknown>
  ): Promise<PaginatedLocateResponse> => {
    return this.get(`orders/${orderRef}/consumers`, queryParams);
  };

  /**
   * Used to retrieve consumer details
   * @param orderConsumerRef
   * @param queryParams
   * @returns
   */
  retrieve = <T>(
    orderConsumerRef: string,
    queryParams: Record<string, unknown>
  ): Promise<T> => {
    return this.get(`orderConsumers/${orderConsumerRef}`, queryParams);
  };
  update = (
    orderConsumerRef: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`orderConsumers/${orderConsumerRef}`, body);
  };
  create = (
    orderRef: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`orders/${orderRef}/consumers`, body);
  };
}
