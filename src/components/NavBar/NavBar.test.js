import NavBar from './NavBar';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<NavBar />', () => {
  let wrapper;
  let navBarComponent;

  beforeEach(() => {
    wrapper = setup(NavBar);
    navBarComponent = findByTestAttr(wrapper, 'component-navbar');
  });

  it('renders without error', () => {
    expect(navBarComponent).toHaveLength(1);
  });
});