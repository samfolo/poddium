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

  describe('fields', () => {
    it('renders an email field', () => expectLengthOf(wrapper, 'input-email').toBe(1));
    it('renders a password field', () => expectLengthOf(wrapper, 'input-password').toBe(1));
  });

  it('renders a submit button', () => expectLengthOf(wrapper, 'submit-form-auth').toBe(1));
});