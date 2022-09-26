import axios, { AxiosRequestConfig } from 'axios';
import { logError } from './logger';

export class CdpPersonalizeApi {
  private clientKey!: string;
  private pointOfSale!: string;
  private currency!: string;
  private channel!: string;
  private apiEndpoint: string = 'https://api.boxever.com/v1.2';

  initialize(
    clientKey: string,
    pointOfSale: string,
    currency: string,
    channel: string,
    apiEndpoint?: string
  ) {
    this.clientKey = clientKey;
    this.pointOfSale = pointOfSale;
    this.currency = currency;
    this.channel = channel;

    if (apiEndpoint) {
      this.apiEndpoint = apiEndpoint;
    }
  }

  callFlows = <T>(requestData: Record<string, unknown>): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      try {
        this.get('callFlows', requestData)
          .then(result => {
            resolve(result as T);
          })
          .catch(error => logError(error));
      } catch (err) {
        reject(err);
      }
    });
  };

  authenticatedPost = async (
    action: string,
    body: Record<string, unknown>,
    basicAuthToken: string
  ): Promise<unknown> => {
    const url = `${this.apiEndpoint}/${action}`;

    const options: AxiosRequestConfig = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Basic ${basicAuthToken}`,
      },
      data: body,
      url,
    };

    return axios(options);
  };

  get = async (
    action: string,
    payload?: Record<string, unknown>
  ): Promise<unknown> => {
    const message = {
      clientKey: this.clientKey,
      pointOfSale: this.pointOfSale,
      currency: this.currency,
      channel: this.channel,
      ...payload,
    };
    const url = `${this.apiEndpoint}/${action}?message=${JSON.stringify(
      message
    )}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json().catch(error => console.log(error));
  };
}
