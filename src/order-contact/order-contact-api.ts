import { CdpHttpClient } from '../base/cdp-http-client';
import { CdpConfiguration } from '../types';

export class OrderContactApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  locate = (
    orderRef: string,
    queryParams: Record<string, unknown>
  ): Promise<unknown> => {
    return this.get(`orders/${orderRef}/contacts`, queryParams);
  };
  retrieve = (
    orderContactRef: string,
    queryParams: Record<string, unknown>
  ): Promise<unknown> => {
    return this.get(`orderContacts/${orderContactRef}`, queryParams);
  };
  update = (
    orderContactRef: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`orderContacts/${orderContactRef}`, body);
  };
  create = (
    orderRef: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`orders/${orderRef}/contacts`, body);
  };

  delete = (orderContactRef: string): Promise<unknown> => {
    return this.del(`orderContacts/${orderContactRef}`);
  };
}
