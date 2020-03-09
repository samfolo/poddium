import Episode from './Episode';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<Episode />', () => {
  let wrapper;
  let episodeComponent;

  beforeEach(() => {
    wrapper = setup(Episode);
    episodeComponent = findByTestAttr(wrapper, 'component-episode');
  });

  it('renders without error', () => {
    expect(episodeComponent).toHaveLength(1);
  });
});
