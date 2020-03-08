import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionCreators from './podcast'

describe('podcast actionCreators', () => {
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

  describe('loadEpisodes', () => {
    it('retrieves the podcasts for a particulat show', async () => {
      // mockData = { id: 'g3n3r1c' };
      // mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }));
      // await store.dispatch(actionCreators.createUser(mockData.id));

      // expect(mockAxios.post).toHaveBeenCalledTimes(1);
      // expect(mockAxios.post).toHaveBeenCalledWith('/users/new', mockData);
      
      // // automatic login for new users
      // actions = store.getActions();
      // expect(actions[0].type).toEqual("LOGIN_USER")
    });
  });
});