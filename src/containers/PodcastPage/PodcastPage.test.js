import PodcastPage from './PodcastPage';
import { setup, findByTestAttr } from '../../testHelpers';

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
});
