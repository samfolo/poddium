import Show from './Show';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<Show />', () => {
  let wrapper;
  let showComponent;

  beforeEach(() => {
    wrapper = setup(Show);
    showComponent = findByTestAttr(wrapper, 'component-show');
  });

  it('renders without error', () => {
    expect(showComponent).toHaveLength(1);
  });
});
