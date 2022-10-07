import { CdpHttpClient } from '../base/cdp-http-client';
import { CdpConfiguration } from '../types';
import { GuestLocateResponse } from './models/guest-locate-response';

export class GuestApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  /**
   * Used to locate guests using their email address or other identifying information
   * @param queryParams
   * @returns list of found guests
   */
  locate = (
    queryParams: Record<string, unknown>
  ): Promise<GuestLocateResponse> => {
    return this.get('guests', queryParams);
  };

  /**
   * Used to retrieve guest details
   * @param guestRef
   * @returns guest's CDP data
   */
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
