function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.post = jest.fn(() => Promise.resolve({ data: { username: 'Mocked', email: 'Mocked', password: 'Mocked' } }));

export default mockAxios;
