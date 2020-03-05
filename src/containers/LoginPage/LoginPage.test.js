import { LoginPage } from './LoginPage';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<LoginPage />', () => {
  let wrapper;
  let loginPageContainer;
  let signInButton;
  let signUpButton;

  beforeEach(() => {
    wrapper = setup(LoginPage);
    loginPageContainer = findByTestAttr(wrapper, 'component-login-page');
  });

  it('renders without error', () => {
    expect(loginPageContainer).toHaveLength(1);
  });

  it('initially renders a `Sign up` button', () => {
    signUpButton = findByTestAttr(wrapper, 'sign-up');
    expect(signUpButton).toHaveLength(1);
    expect(signUpButton.text()).toEqual('Sign up');
  });

  it('initially renders a `Sign in` button', () => {
    signInButton = findByTestAttr(wrapper, 'sign-in');
    expect(signInButton).toHaveLength(1);
    expect(signInButton.text()).toEqual('Sign in');
  });

  describe('signing up and signing in', () => {
    let signInForm;
    let signUpForm;

    const findAllForms = () => {
      signInForm = findByTestAttr(wrapper, 'sign-in-form');
      signUpForm = findByTestAttr(wrapper, 'sign-up-form');
    }

    const findAllButtons = () => {
      signInButton = findByTestAttr(wrapper, 'sign-in');
      signUpButton = findByTestAttr(wrapper, 'sign-up');
    }

    it('does not initially render any form', () => {
      findAllForms();
      expect(signInForm).toHaveLength(0);
      expect(signUpForm).toHaveLength(0);
    });

    it('renders a `Sign in` form when user wants to sign in', () => {
      wrapper = setup(LoginPage, {}, { isSignIn: true });
      findAllForms();
      findAllButtons();

      expect(signInForm).toHaveLength(1);
      expect(signUpForm).toHaveLength(0);
      expect(signInButton).toHaveLength(0);
      expect(signUpButton).toHaveLength(0);
    });

    it('renders a `Sign up` form when user wants so sign up', () => {
      wrapper = setup(LoginPage, {}, { isSignUp: true });
      findAllForms();

      expect(signInForm).toHaveLength(0);
      expect(signUpForm).toHaveLength(1);
      expect(signInButton).toHaveLength(0);
      expect(signUpButton).toHaveLength(0);
    });
  });
});