import NavButton from './NavButton';
import { setup, findByTestAttr } from '../testHelpers';

describe('<NavButton />', () => {
  let wrapper;
  let navButtonComponent;

  beforeEach(() =>{
    wrapper = setup(NavButton);
    navButtonComponent = findByTestAttr(wrapper, 'component-nav-button');
  });

  it('renders without error', () => {
    expect(navButtonComponent).toHaveLength(1);
  });
});
