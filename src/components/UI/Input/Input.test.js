import Input from './Input';
import { setup, findByTestAttr } from '../../../testHelpers';

describe('<Input />', () => {
  let wrapper;
  let inputComponent;
  let defaultProps = {
    config: {
      required: false,
    }
  }

  beforeEach(() => {
    wrapper = setup(Input, defaultProps);
    inputComponent = findByTestAttr(wrapper, 'component-input');
  });

  it('renders without error', () => {
    expect(inputComponent).toHaveLength(1);
  });
});
