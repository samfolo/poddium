import PodcastPage from './PodcastPage';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';

describe('<PodcastPage />', () => {
  let wrapper;
  let podcastPageComponent;

  beforeEach(() => {
    wrapper = setup(PodcastPage);
    podcastPageComponent = findByTestAttr(wrapper, 'component-podcast-page');
  });

  it('renders without error', () => {
    expect(podcastPageComponent).toHaveLength(1);
  });

  it('renders an episode list', () => {
    expectLengthOf(wrapper, 'episode-list').toBe(1);
  });
});
