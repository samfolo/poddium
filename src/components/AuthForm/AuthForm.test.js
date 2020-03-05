import AuthForm from './AuthForm';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';

describe('<AuthForm />', () => {
  let wrapper;
  let authFormComponent;

  beforeEach(() => {
    wrapper = setup(AuthForm);
    authFormComponent = findByTestAttr(wrapper, 'component-auth-form');
  });

  it('renders without error', () => {
    expect(authFormComponent).toHaveLength(1);
  });
});