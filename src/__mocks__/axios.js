function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.post = jest.fn((url, data) => {
  return Promise.resolve({ data: { username: 'Sam', email: data.email, password: data.password } });
});

export default mockAxios;
