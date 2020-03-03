import SignUpForm from './SignUpForm';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';

describe('<SignUpForm />', () => {
  let wrapper;
  let signUpFormComponent;

  beforeEach(() => {
    wrapper = setup(SignUpForm);
    signUpFormComponent = findByTestAttr(wrapper, 'component-sign-up-form');
  });

  it('renders without error', () => {
    expect(signUpFormComponent).toHaveLength(1);
  });

  describe('fields', () => {
    it('renders a username field', () => expectLengthOf(wrapper, 'input-username').toBe(1));
    it('renders an email field', () => expectLengthOf(wrapper, 'input-email').toBe(1));
    it('renders a password field', () => expectLengthOf(wrapper, 'input-password').toBe(1));
    it('renders a password confirmation field', () => expectLengthOf(wrapper, 'input-passwordConfirmation').toBe(1));
  });

  it('renders a submit button', () => expectLengthOf(wrapper, 'submit-form-sign-up').toBe(1));
});
