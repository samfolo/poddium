import PodcastDisplay from './PodcastDisplay';
import { setup, findByTestAttr } from '../../../testHelpers';

describe('<PodcastDisplay />', () => {
  let wrapper;
  let podcastDisplayComponent;

  beforeEach(() => {
    wrapper = setup(PodcastDisplay);
    podcastDisplayComponent = findByTestAttr(wrapper, 'component-podcast-display');
  });

  it('renders without error', () => {
    expect(podcastDisplayComponent).toHaveLength(1);
  });
});