import Input from './Input';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<Input />', () => {
  let wrapper;
  let inputComponent;

  beforeEach(() => {
    wrapper = setup(Input);
    inputComponent = findByTestAttr(wrapper, 'component-input');
  });

  it('renders without error', () => {
    expect(inputComponent).toHaveLength(1);
  });
});
