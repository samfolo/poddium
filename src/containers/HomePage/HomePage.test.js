import HomePage from './HomePage';
import { setup, findByTestAttr, flushPromises } from '../../testHelpers';
import Spotify from '../../util/Spotify/Spotify';
import mockResponses from '../../util/mockApiResonses';

describe('<HomePage />', () => {
  let wrapper;
  let homePageComponent;

  beforeEach(() => {
    wrapper = setup(HomePage);
    homePageComponent = findByTestAttr(wrapper, 'component-homepage');
  });

  it('renders without error', () => {
    expect(homePageComponent).toHaveLength(1);
  });

  it('renders a list of podcasts on mounting', async () => {
    const mock = jest.spyOn(Spotify, 'search');
    mock.mockResolvedValueOnce(mockResponses.getGenericPodcasts());

    wrapper = setup(HomePage);
    await flushPromises();

    const podcasts = findByTestAttr(wrapper, 'podcast');
    expect(podcasts).toHaveLength(20);
  });
});
