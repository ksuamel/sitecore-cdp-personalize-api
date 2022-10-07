import { CdpHttpClient } from '../base/cdp-http-client';
import { LocateResponse } from '../base/models/locate-response';
import { CdpConfiguration } from '../types';

export class OrderContactApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  /**
   * Used to locate order contacts
   * @param orderRef
   * @param queryParams
   * @returns
   */
  locate = (
    orderRef: string,
    queryParams: Record<string, unknown>
  ): Promise<LocateResponse> => {
    return this.get(`orders/${orderRef}/contacts`, queryParams);
  };

  /**
   * Used to retrieve order contact details
   * @param orderContactRef
   * @param queryParams
   * @returns
   */
  retrieve = <T>(
    orderContactRef: string,
    queryParams: Record<string, unknown>
  ): Promise<T> => {
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
