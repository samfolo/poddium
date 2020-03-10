import NavBar from './NavBar';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';

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

  it('renders a home button', () => expectLengthOf(wrapper, 'home-navlink').toBe(1));
});
