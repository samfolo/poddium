import Show from './Show';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';
import mockResponses from '../../util/mockApiResonses';

describe('<Show />', () => {
  let wrapper;
  let showComponent;
  const defaultProps = mockResponses.getGenericPodcasts()[0];

  beforeEach(() => {
    wrapper = setup(Show, defaultProps);
    showComponent = findByTestAttr(wrapper, 'component-show');
  });

  it('renders without error', () => {
    expect(showComponent).toHaveLength(1);
  });

  it('renders the show name', () => expectLengthOf(wrapper, 'name').toBe(1));
  it('renders the show image', () => expectLengthOf(wrapper, 'image').toBe(1));
  it('renders the show description', () => expectLengthOf(wrapper, 'description').toBe(1));
  it('renders the show publisher', () => expectLengthOf(wrapper, 'publisher').toBe(1));
});
