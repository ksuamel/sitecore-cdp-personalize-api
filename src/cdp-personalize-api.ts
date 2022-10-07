import { CallFlowApi } from './call-flow/call-flow-api';
import { GuestApi } from './guest/guest-api';
import { GuestDataExtensionsApi } from './guest/guest-data-extensions-api';
import { OrderConsumerApi } from './order-consumer/order-consumer-api';
import { OrderContactApi } from './order-contact/order-contact-api';
import { OrderItemApi } from './order-item/order-item-api';
import { OrderApi } from './order/order-api';
import { CdpConfiguration } from './types';

export class CdpPersonalizeApi {
  private configuration!: CdpConfiguration;
  private guestApi!: GuestApi;
  private guestDataExtensionApi!: GuestDataExtensionsApi;
  private callFlowApi!: CallFlowApi;
  private orderApi!: OrderApi;
  private orderConsumerApi!: OrderConsumerApi;
  private orderContactApi!: OrderContactApi;
  private orderItemApi!: OrderItemApi;

  initialize(configuration: CdpConfiguration) {
    if (!configuration.apiEndpoint || configuration.apiEndpoint.length == 0) {
      configuration.apiEndpoint = 'https://api.boxever.com/v2';
    }

    this.configuration = configuration;
  }

  guest = (): GuestApi => {
    if (!this.guestApi) {
      this.guestApi = new GuestApi(this.configuration);
    }

    return this.guestApi;
  };

  dataExtension = (): GuestDataExtensionsApi => {
    if (!this.guestDataExtensionApi) {
      this.guestDataExtensionApi = new GuestDataExtensionsApi(
        this.configuration
      );
    }

    return this.guestDataExtensionApi;
  };

  callFlows = (): CallFlowApi => {
    if (!this.callFlowApi) {
      this.callFlowApi = new CallFlowApi(this.configuration);
    }

    return this.callFlowApi;
  };

  order = (): OrderApi => {
    if (!this.orderApi) {
      this.orderApi = new OrderApi(this.configuration);
    }

    return this.orderApi;
  };

  orderConsumer = (): OrderConsumerApi => {
    if (!this.orderConsumerApi) {
      this.orderConsumerApi = new OrderConsumerApi(this.configuration);
    }

    return this.orderConsumerApi;
  };

  orderContact = (): OrderContactApi => {
    if (!this.orderContactApi) {
      this.orderContactApi = new OrderContactApi(this.configuration);
    }

    return this.orderContactApi;
  };

  orderItem = (): OrderItemApi => {
    if (!this.orderItemApi) {
      this.orderItemApi = new OrderItemApi(this.configuration);
    }

    return this.orderItemApi;
  };
}
