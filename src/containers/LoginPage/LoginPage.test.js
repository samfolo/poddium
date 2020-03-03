import LoginPage from './LoginPage';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<LoginPage />', () => {
  let wrapper;
  let loginPageContainer;

  beforeEach(() => {
    wrapper = setup(LoginPage);
    loginPageContainer = findByTestAttr(wrapper, 'component-login-page');
  });

  it('renders without error', () => {
    expect(loginPageContainer).toHaveLength(1);
  });

  it('initially renders a `Sign up` button', () => {
    const signUpButton = findByTestAttr(wrapper, 'sign-up');
    expect(signUpButton).toHaveLength(1);
    expect(signUpButton.text()).toEqual('Sign up');
  });

  it('initially renders a `Sign in` button', () => {
    const signInButton = findByTestAttr(wrapper, 'sign-in');
    expect(signInButton).toHaveLength(1);
    expect(signInButton.text()).toEqual('Sign in');
  });
})