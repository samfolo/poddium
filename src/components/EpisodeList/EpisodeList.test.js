import EpisodeList from './EpisodeList';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';
import mockResponses from '../../util/mockApiResonses';

describe('<EpisodeList />', () => {
  let wrapper;
  let episodeListComponent;
  let episodes;

  const getEpisodes = (number = 20) => {
    return mockResponses.getGenericEpisodes().slice(0, number);
  }

  beforeEach(() => {
    wrapper = setup(EpisodeList, { episodes: getEpisodes(10) });
    episodeListComponent = findByTestAttr(wrapper, 'component-episode-list');
  });

  it('renders without error', () => {
    expect(episodeListComponent).toHaveLength(1);
  });

  describe('rendering episodes', () => {
    const runTestWithEpisodes = number => {
      episodes = getEpisodes(number)
      wrapper = setup(EpisodeList, { episodes });
      expectLengthOf(wrapper, 'episode').toBe(number);
    }

    it('renders an episode when passed a single episode', () => runTestWithEpisodes(1));
    it('renders eight episodes when passed eight episodes', () => runTestWithEpisodes(8));
    it('renders nineteen episodes when passed nineteen episodes', () => runTestWithEpisodes(19));
    it('renders three episodes when passed three episodes', () => runTestWithEpisodes(3));
  });
});
