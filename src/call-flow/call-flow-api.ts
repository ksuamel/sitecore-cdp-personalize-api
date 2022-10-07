import { CdpHttpClient } from '../base/cdp-http-client';
import { CdpConfiguration } from '../types';

export class CallFlowApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  execute = <T>(
    friendlyId: string,
    body: Record<string, unknown>
  ): Promise<T> => {
    return this.post(`callFlows`, {
      clientKey: this.configuration.clientKey,
      channel: this.configuration.channel,
      language: this.configuration.language,
      currencyCode: this.configuration.currency,
      pointOfSale: this.configuration.pointOfSale,
      friendlyId: friendlyId,
      ...body,
    }) as Promise<T>;
  };
}
