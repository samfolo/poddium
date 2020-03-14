import Logo from './Logo';
import { setup, findByTestAttr, expectLengthOf } from '../../../testHelpers';

describe('<Logo />', () => {
  let wrapper;
  let logoComponent;

  beforeEach(() => {
    wrapper = setup(Logo);
    logoComponent = findByTestAttr(wrapper, 'component-logo');
  });

  it('renders without error', () => {
    expect(logoComponent).toHaveLength(1);
  });
});
