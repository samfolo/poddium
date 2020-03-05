import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionCreators from './user'

describe('user actionCreators', () => {
  let middlewares;
  let mockStore;
  let store;
  let mockData;
  let actions;

  beforeEach(() => {
    middlewares = [thunk];
    mockStore = configureMockStore(middlewares);
    store = mockStore();
  });

  afterEach(() => {
    jest.resetAllMocks()
  });

  describe('createUser', () => {
    it('posts user data to the backend', async () => {
      mockData = { username: 'sam', email: 'sam@example.com', password: '1234icecream' };
      mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: mockData }));
      await store.dispatch(actionCreators.createUser(mockData));

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(mockAxios.post).toHaveBeenCalledWith('/users/new', mockData);
      
      // automatic login for new users
      actions = store.getActions();
      expect(actions[0].type).toEqual("LOGIN_USER")
    });
  });

  describe('authoriseUser', () => {
    it('verifies the login data', async () => {
      mockData = { email: 'sam@example.com', password: '1234icecream' };
      mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: 'authorised', status: 200 }));
      await store.dispatch(actionCreators.authoriseUser(mockData));

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(mockAxios.post).toHaveBeenCalledWith('/sessions/new', mockData);
      
      actions = store.getActions();
      expect(actions[0].type).toEqual("LOGIN_USER")
    });
  });
});
