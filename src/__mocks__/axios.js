function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

let currentUserData;

const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.post = jest.fn((pathname, data) => {
  switch (pathname) {
    case '/sessions/new':
      return Promise.resolve({ 
        data: { 
          username: currentUserData.username, 
          email: data.email, 
          password: data.password 
        } 
      });
    default: // '/users/new'
      currentUserData = data; // stores the sign up information for the sign-in mock first
      return Promise.resolve({
        data: {
          username: data.username,
          email: data.email,
          password: data.password
        }
      });
  }
  
});

export default mockAxios;
