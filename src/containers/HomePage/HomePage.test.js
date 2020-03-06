import HomePage from './HomePage';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<HomePage />', () => {
  let wrapper;
  let homePageComponent;

  beforeEach(() => {
    wrapper = setup(HomePage);
    homePageComponent = findByTestAttr(wrapper, 'component-homepage');
  });

  it('renders without error', () => {
    expect(homePageComponent).toHaveLength(1);
  });
});
