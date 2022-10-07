# Sitecore CDP and Personalize

The sitecore-cdp-personalize-api library is used to quickly integrate with Boxever (Sitecore CDP and Personalize) HTTP APIs.

# Features

- Typescript Support
- Easy to use wrapper over Boxever (Sitecore CDP and Personalize) HTTP APIs
- Promise-based

# Usage

**Installaion**

```js
npm install sitecore-cdp-personalize-api
```

**Core Setup**

```ts
import { cdpPersonalizeApi } from 'sitecore-cdp-personalize-api';

//Configure CDP and Personalize API
cdpPersonalizeApi.initialize({
  pointOfSale: '[POINT_OF_SALE]',
  currency: '[CURRENCY]',
  language: '[LANGAUGE]',
  apiEndpoint: 'https://api.boxever.com/v2',
  channel: '[CHANNEL]',
  apiKey: '[API_KEY]',
  apiSecret: '[API_KEY_SECRET]',
});
```

# Methods

Sitecore CDP and Personalize has many APIs across entities. To keep things simple, everything is broken down by entity type.

**Guest**

```ts
cdpPersonalizeApi
  .guest()
  .locate({
    email: '[EMAIL]',
    // other query parameters
  })
  .then(result => {
    console.log(result);
  });

cdpPersonalizeApi
  .guest()
  .retrieve('[GUEST_REF]')
  .then(result => {
    console.log(result);
  });

cdpPersonalizeApi
  .guest()
  .create({
    //guest data
  })
  .then(result => {
    console.log(result);
  });

cdpPersonalizeApi
  .guest()
  .update('[GUEST_REF]', {
    //guest data
  })
  .then(result => {
    console.log(result);
  });
```

**Guest Data Extenions**

```ts
cdpPersonalizeApi
  .dataExtension()
  .locate('[GUEST_REF]', '[EXTENSION_NAME]')
  .then(result => console.log(result));

cdpPersonalizeApi
  .dataExtension()
  .retrieve('[GUEST_REF]', '[EXTENSION_NAME]', '[EXTENSION_ID]')
  .then(result => console.log(result));

cdpPersonalizeApi
  .dataExtension()
  .upsert('[GUEST_REF]', '[EXTENSION_NAME]', {
    //data extension data
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .dataExtension()
  .delete('[GUEST_REF]', '[EXTENSION_NAME]', '[EXTENSION_ID]')
  .then(result => console.log(result));
```

**CallFlows**

```ts
cdpPersonalizeApi
  .callFlows()
  .execute('[FRIENDLY_ID]', {
    //other body properties you need
  })
  .then(result => {
    console.log(result);
  });
```

**Orders**

```ts
cdpPersonalizeApi
  .order()
  .locate('[GUEST_REF]', {
    //additioanl query params
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .order()
  .retrieve('[ORDER_REF]')
  .then(result => console.log(result));

cdpPersonalizeApi
  .order()
  .create('[GUEST_REF]', {
    //order data
  })
  .then(result => console.log(result));
```

**Order Items**

```js
cdpPersonalizeApi
  .orderItem()
  .locate('[ORDER_REF]', {
    //additional query params
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .orderItem()
  .retrieve('[ORDER_ITEM_REF]', {
    //additional query params
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .orderItem()
  .create('[ORDER_REF]', {
    //order item data
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .orderItem()
  .update('[ORDER_ITEM_REF]', {
    //order item data
  })
  .then(result => console.log(result));
```

**Order Consumer**

```ts
cdpPersonalizeApi
  .orderConsumer()
  .locate('[ORDER_REF]', {
    //additional query params
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .orderConsumer()
  .retrieve('[ORDER_CONSUMER_REF]', {
    //additional query params
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .orderConsumer()
  .create('[ORDER_REF]', {
    //order consumer data
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .orderConsumer()
  .update('[ORDER_CONSUMER_REF]', {
    //order consumer data
  })
  .then(result => console.log(result));
```

**Order Contact**

```ts
cdpPersonalizeApi
  .orderContact()
  .locate('[ORDER_REF]', {
    //additional query params
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .orderContact()
  .retrieve('[ORDER_CONTACT_REF]', {
    //additional query params
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .orderContact()
  .create('[ORDER_REF]', {
    //order contact data
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .orderContact()
  .update('[ORDER_CONTACT_REF]', {
    //order contact data
  })
  .then(result => console.log(result));

cdpPersonalizeApi
  .orderContact()
  .delete('[ORDER_CONTACT_REF]')
  .then(result => console.log(result));
```

**More to come!**

This package is still under development, but more APIs are coming soon.
