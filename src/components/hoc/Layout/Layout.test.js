import Layout from './Layout';
import { setup, findByTestAttr, expectLengthOf } from '../../../testHelpers';

describe('<Layout />', () => {
  let wrapper;
  let layoutComponent;

  beforeEach(() => {
    wrapper = setup(Layout);
    layoutComponent = findByTestAttr(wrapper, 'component-layout');
  });

  it('renders without error', () => {
    expect(layoutComponent).toHaveLength(1);
  });
});
