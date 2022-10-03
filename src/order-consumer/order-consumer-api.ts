import { CdpHttpClient } from '../base/cdp-http-client';
import { CdpConfiguration } from '../types';

export class OrderConsumerApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  locate = (
    orderRef: string,
    queryParams: Record<string, unknown>
  ): Promise<unknown> => {
    return this.get(`orders/${orderRef}/consumers`, queryParams);
  };
  retrieve = (
    orderConsumerRef: string,
    queryParams: Record<string, unknown>
  ): Promise<unknown> => {
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
