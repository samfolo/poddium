import { PodcastPage } from './PodcastPage';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';
import mockApiResponses from '../../util/mockApiResonses';

describe('<PodcastPage />', () => {
  let wrapper;
  let podcastPageComponent;
  let defaultProps = { show: mockApiResponses.getGenericPodcasts()[0]};

  beforeEach(() => {
    wrapper = setup(PodcastPage, defaultProps);
    podcastPageComponent = findByTestAttr(wrapper, 'component-podcast-page');
  });

  it('renders without error', () => {
    expect(podcastPageComponent).toHaveLength(1);
  });

  it('renders an <EpisodeList />', () => {
    expectLengthOf(wrapper, 'episode-list').toBe(1);
  });

  it('renders a <ShowDisplay />', () => {
    expectLengthOf(wrapper, 'show-display').toBe(1);
  });

  it('renders a <NavBar />', () => expectLengthOf(wrapper, 'navbar').toBe(1));
});
