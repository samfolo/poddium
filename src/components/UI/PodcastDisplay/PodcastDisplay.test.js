import PodcastDisplay from './PodcastDisplay';
import { setup, findByTestAttr, expectLengthOf } from '../../../testHelpers';

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

  it('renders an image', () => {
    expectLengthOf(wrapper, 'image').toBe(1)
  });
});