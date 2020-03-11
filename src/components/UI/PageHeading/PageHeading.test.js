import PageHeading from './PageHeading';
import { setup, findByTestAttr } from '../../../testHelpers';

describe('<PageHeading />', () => {
  let wrapper;
  let pageHeadingComponent;

  beforeEach(() => {
    wrapper = setup(PageHeading);
    pageHeadingComponent = findByTestAttr(wrapper, 'component-page-heading');
  });
  
  it('renders without error', () => {
    expect(pageHeadingComponent).toHaveLength(1);
  });
});
