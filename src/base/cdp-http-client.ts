import { CdpConfiguration } from '../types';
import { encode } from '../util/base64';

export class CdpHttpClient {
  protected configuration: CdpConfiguration;
  private basicAuthToken: string;

  constructor(configuration: CdpConfiguration) {
    this.configuration = configuration;

    this.basicAuthToken = encode(
      `${this.configuration.clientKey}:${this.configuration.apiToken}`
    );
  }

  protected get = async <T>(
    action: string,
    queryParams?: Record<string, unknown>
  ): Promise<T> => {
    const queryParamString = this.toQueryParamString(queryParams);
    const url = `${this.configuration.apiEndpoint}/${action}${queryParamString}`;
    const response = await fetch(url, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Basic ${this.basicAuthToken}`,
      },
    });

    return response.json() as Promise<T>;
  };

  protected post = async (
    action: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    const url = `${this.configuration.apiEndpoint}/${action}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Basic ${this.basicAuthToken}`,
      },
      body: JSON.stringify(body),
    });

    return response.json();
  };

  protected del = async (action: string): Promise<unknown> => {
    const url = `${this.configuration.apiEndpoint}/${action}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Basic ${this.basicAuthToken}`,
      },
    });

    return response.json();
  };

  private toQueryParamString = (record?: Record<string, unknown>) => {
    if (record == null || record.length == 0) {
      return '';
    }

    return (
      '?' +
      Object.keys(record)
        .map(key => `${key}=${encodeURIComponent(record[key] as string)}`)
        .join('&')
    );
  };
}
