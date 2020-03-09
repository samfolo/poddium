import { HomePage } from './HomePage';
import { setup, findByTestAttr, flushPromises, expectLengthOf } from '../../testHelpers';
import Spotify from '../../util/Spotify/Spotify';
import mockResponses from '../../util/mockApiResonses';

describe('<HomePage />', () => {
  let wrapper;
  let homePageComponent;

  beforeEach(() => {
    wrapper = setup(HomePage, { onShowClick: jest.fn() });
    homePageComponent = findByTestAttr(wrapper, 'component-homepage');
  });

  it('renders without error', () => {
    expect(homePageComponent).toHaveLength(1);
  });

  it('receives a list of podcasts on mounting', async () => {
    const mock = jest.spyOn(Spotify, 'search');
    mock.mockResolvedValueOnce(mockResponses.getGenericPodcasts());

    wrapper = setup(HomePage); // trigger componentDidMount;
    await flushPromises();

    expect(wrapper.state('searchResults')).toHaveLength(20);
  });

  it('renders a <ShowList />', () => {
    expectLengthOf(wrapper, 'showlist').toBe(1)
  });
});
