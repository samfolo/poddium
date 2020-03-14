import { LoginPage } from './LoginPage';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';

describe('<LoginPage />', () => {
  let wrapper;
  let loginPageContainer;
  let loginButton;
  let signUpButton;

  beforeEach(() => {
    wrapper = setup(LoginPage, { onClick: jest.fn() });
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
    loginButton = findByTestAttr(wrapper, 'sign-in');
    expect(loginButton).toHaveLength(1);
    expect(loginButton.text()).toEqual('Sign in');
  });

  describe('signing up and signing in', () => {
    let loginForm;
    let signUpForm;

    const findAllForms = () => {
      loginForm = findByTestAttr(wrapper, 'login-form');
      signUpForm = findByTestAttr(wrapper, 'sign-up-form');
    }

    const findAllButtons = () => {
      loginButton = findByTestAttr(wrapper, 'sign-in');
      signUpButton = findByTestAttr(wrapper, 'sign-up');
    }

    it('does not initially render any form', () => {
      findAllForms();
      expect(loginForm).toHaveLength(0);
      expect(signUpForm).toHaveLength(0);
    });

    it('renders a `Sign in` form when user wants to sign in', () => {
      wrapper = setup(LoginPage, {}, { isLogin: true });
      findAllForms();
      findAllButtons();

      expect(loginForm).toHaveLength(1);
      expect(signUpForm).toHaveLength(0);
      expect(loginButton).toHaveLength(0);
      expect(signUpButton).toHaveLength(0);
    });

    it('renders a `Sign up` form when user wants so sign up', () => {
      wrapper = setup(LoginPage, {}, { isSignUp: true });
      findAllForms();

      expect(loginForm).toHaveLength(0);
      expect(signUpForm).toHaveLength(1);
      expect(loginButton).toHaveLength(0);
      expect(signUpButton).toHaveLength(0);
    });
  });

  it('renders a <Logo />', () => expectLengthOf(wrapper, 'poddium-logo').toBe(1));
});