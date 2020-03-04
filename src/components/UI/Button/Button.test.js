import Button from './Button';
import { setup, findByTestAttr } from '../../../testHelpers';

describe('<Button />', () => {
  let wrapper;
  let buttonComponent;

  beforeEach(() => {
    wrapper = setup(Button);
    buttonComponent = findByTestAttr(wrapper, 'component-button');
  });

  it('renders without error', () => {
    expect(buttonComponent).toHaveLength(1);
  });

  it('renders its children', () => {
    wrapper = setup(Button, { children: 'Go' });
    buttonComponent = findByTestAttr(wrapper, 'component-button');
    expect(buttonComponent.text()).toEqual('Go');
  });
});
