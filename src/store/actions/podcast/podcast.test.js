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
    it('retrieves the podcasts for a particulat show', () => {});
  });
});