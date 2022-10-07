import { CdpHttpClient } from '../base/cdp-http-client';
import { CdpConfiguration } from '../types';

export class GuestDataExtensionsApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  locate = (guestRef: string, extensionName: string): Promise<unknown> => {
    return this.get(`guests/${guestRef}/${extensionName}`);
  };
  retrieve = (
    guestRef: string,
    extensionName: string,
    extensionId: string
  ): Promise<unknown> => {
    return this.get(`guests/${guestRef}/${extensionName}/${extensionId}`);
  };
  upsert = (
    guestRef: string,
    extensionName: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`guests/${guestRef}/${extensionName}`, body);
  };
  delete = (
    guestRef: string,
    extensionName: string,
    extensionId: string
  ): Promise<unknown> => {
    return this.del(`guests/${guestRef}/${extensionName}/${extensionId}`);
  };
}
