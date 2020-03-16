import Episode from './Episode';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';
import mockResponses from '../../util/mockApiResonses';

describe('<Episode />', () => {
  let wrapper;
  let episodeComponent;
  const defaultProps = mockResponses.getGenericEpisodes()[0];

  beforeEach(() => {
    wrapper = setup(Episode, defaultProps);
    episodeComponent = findByTestAttr(wrapper, 'component-episode');
  });

  it('renders without error', () => {
    expect(episodeComponent).toHaveLength(1);
  });

  it('renders the episode name', () => expectLengthOf(wrapper, 'name').toBe(1));
  it('renders the episode image', () => expectLengthOf(wrapper, 'episode-thumbnail').toBe(1));
});
