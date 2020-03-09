import EpisodeList from './EpisodeList';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<EpisodeList />', () => {
  let wrapper;
  let episodeListComponent;

  beforeEach(() => {
    wrapper = setup(EpisodeList);
    episodeListComponent = findByTestAttr(wrapper, 'component-episode-list');
  });

  it('renders without error', () => {
    expect(episodeListComponent).toHaveLength(1);
  });
});
