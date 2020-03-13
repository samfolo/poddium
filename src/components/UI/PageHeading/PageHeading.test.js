import PageHeading from './PageHeading';
import { setup, findByTestAttr } from '../../../testHelpers';

describe('<PageHeading />', () => {
  let wrapper;
  let pageHeadingComponent;

  beforeEach(() => {
    wrapper = setup(PageHeading, { children: 'THE CHILD'});
    pageHeadingComponent = findByTestAttr(wrapper, 'component-page-heading');
  });
  
  it('renders without error', () => {
    expect(pageHeadingComponent).toHaveLength(1);
  });

  it('renders its children', () => {
    expect(wrapper.text()).toEqual('THE CHILD');
  });
});
