import { CdpHttpClient } from '../base/cdp-http-client';
import { CdpConfiguration } from '../types';

export class GuestApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  locate = (queryParams: Record<string, unknown>): Promise<unknown> => {
    return this.get('guests', queryParams);
  };
  retrieve = (guestRef: string): Promise<unknown> => {
    return this.get(`guests/${guestRef}`);
  };
  create = (body: Record<string, unknown>): Promise<unknown> => {
    return this.post('guests', body);
  };
  update = (
    guestRef: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`guests/${guestRef}`, body);
  };
}
