import axios, { AxiosRequestConfig } from 'axios';
import { encode } from 'js-base64';
import { CdpConfiguration } from '../types';

export class CdpHttpClient {
  protected configuration: CdpConfiguration;
  private basicAuthToken: string;

  constructor(configuration: CdpConfiguration) {
    this.configuration = configuration;

    this.basicAuthToken = encode(
      `${this.configuration.apiKey}:${this.configuration.apiSecret}`
    );
  }

  protected get = async (
    action: string,
    queryParams?: Record<string, unknown>
  ): Promise<unknown> => {
    const queryParamString = this.toQueryParamString(queryParams);
    const url = `${this.configuration.apiEndpoint}/${action}${queryParamString}`;
    const options: AxiosRequestConfig = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Basic ${this.basicAuthToken}`,
      },
      url,
    };

    return axios(options);
  };

  protected post = async (
    action: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    const url = `${this.configuration.apiEndpoint}/${action}`;
    const options: AxiosRequestConfig = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Basic ${this.basicAuthToken}`,
      },
      data: body,
      url,
    };

    return axios(options);
  };

  protected del = async (action: string): Promise<unknown> => {
    const url = `${this.configuration.apiEndpoint}/${action}`;
    const options: AxiosRequestConfig = {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Basic ${this.basicAuthToken}`,
      },
      url,
    };

    return axios(options);
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
