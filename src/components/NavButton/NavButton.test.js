import NavButton from './NavButton';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';

describe('<NavButton />', () => {
  let wrapper;
  let navButtonComponent;

  beforeEach(() =>{
    wrapper = setup(NavButton, { link: '/' });
    navButtonComponent = findByTestAttr(wrapper, 'component-nav-button');
  });

  it('renders without error', () => {
    expect(navButtonComponent).toHaveLength(1);
  });

  it('renders a <NavLink /> from react-router', () => {
    expectLengthOf(wrapper, 'navlink').toBe(1);
  });
});
