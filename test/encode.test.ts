import { encode } from '../src/util/base64';

describe('base 64', () => {
  it('encode', () => {
    expect(encode('test:test')).toEqual('dGVzdDp0ZXN0');
  });
});
