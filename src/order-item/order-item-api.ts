import { CdpHttpClient } from '../base/cdp-http-client';
import { CdpConfiguration } from '../types';

export class OrderItemApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  locate = (
    orderRef: string,
    queryParams: Record<string, unknown>
  ): Promise<unknown> => {
    return this.get(`orders/${orderRef}/orderItems`, queryParams);
  };
  retrieve = (
    orderItemRef: string,
    queryParams: Record<string, unknown>
  ): Promise<unknown> => {
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
