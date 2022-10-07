import { CdpHttpClient } from '../base/cdp-http-client';
import { CdpConfiguration } from '../types';

type LocateReponse = {
  href: string;
  offset: number;
  limit: number;
  items: Array<{ href: string }>;
};

export class GuestDataExtensionsApi extends CdpHttpClient {
  constructor(configuration: CdpConfiguration) {
    super(configuration);
  }

  locate = (
    guestRef: string,
    extensionName: string
  ): Promise<LocateReponse> => {
    return this.get(`guests/${guestRef}/${extensionName}`) as Promise<
      LocateReponse
    >;
  };

  retrieve = (
    guestRef: string,
    extensionName: string,
    extensionId: string
  ): Promise<any> => {
    return this.get(`guests/${guestRef}/${extensionName}/${extensionId}`);
  };

  create = (
    guestRef: string,
    extensionName: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(`guests/${guestRef}/${extensionName}`, body);
  };

  update = (
    guestRef: string,
    extensionName: string,
    extensionId: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.post(
      `guests/${guestRef}/${extensionName}/${extensionId}`,
      body
    );
  };

  upsert = async (
    guestRef: string,
    extensionName: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    const extensions = await this.locate(guestRef, extensionName);
    if (extensions.items.length == 0) {
      return this.post(`guests/${guestRef}/${extensionName}`, body);
    }

    const extensionId = this.getUrlLastSegment(extensions.items[0].href);
    const extensionData = await this.retrieve(
      guestRef,
      extensionName,
      extensionId
    );
    if (extensionData == null) {
      throw 'Failed to retrieve extension data';
    }

    const {
      href,
      ref,
      key,
      createdAt,
      modifiedAt,
      guest,
      ...customData
    } = extensionData;

    return this.post(`guests/${guestRef}/${extensionName}/${extensionId}`, {
      ...customData,
      ...body,
    });
  };
  delete = (
    guestRef: string,
    extensionName: string,
    extensionId: string
  ): Promise<unknown> => {
    return this.del(`guests/${guestRef}/${extensionName}/${extensionId}`);
  };

  private getUrlLastSegment = (url: string) => {
    return url.substring(url.lastIndexOf('/') + 1);
  };
}
