import ShowDisplay from './ShowDisplay';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<ShowDisplay />', () => {
  let wrapper;
  let showDisplayComponent;

  beforeEach(() => {
    wrapper = setup(ShowDisplay);
    showDisplayComponent = findByTestAttr(wrapper, 'component-show-display');
  });

  it('renders without error', () => {
    expect(showDisplayComponent).toHaveLength(1);
  });
});
