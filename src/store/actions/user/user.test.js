import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionCreators from './user'

describe('user actionCreators', () => {
  describe('createUser', () => {
    afterEach(() => {
      jest.resetAllMocks()
    });

    it('posts user data to the backend', async () => {
      const middlewares = [thunk];
      const mockStore = configureMockStore(middlewares);
      const store = mockStore();

      const mockData = { username: 'sam', email: 'sam@example.com', password: '1234icecream' };
      mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: mockData }));
      await store.dispatch(actionCreators.createUser(mockData));

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(mockAxios.post).toHaveBeenCalledWith('/users/new', mockData);
      
      const actions = store.getActions();
      expect(actions[0].type).toEqual("CREATE_USER")
    });
  })
})