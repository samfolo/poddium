import { mountedSetup, findByTestAttr } from '../testHelpers';
import App from '../containers/App/App';

describe('signing up', () => {
  let wrapper;
  let signUpButton;
  let usernameField;
  let emailField;
  let passwordField;
  let passwordConfirmationField;
  let submitButton;

  let loginPage;
  let profilePage;
  
  beforeEach(() => {
    wrapper = mountedSetup(App, {}, ['/login']);
    signUpButton = findByTestAttr(wrapper, 'sign-up');
  });

  const fill = field => ({ with: value => field.simulate('change', { target: { value } }) });

  test('a user named Elodie signs up correctly', () => {
    signUpButton.simulate('click');

    usernameField = findByTestAttr(wrapper, 'input-username');
    fill(usernameField).with('Elodie');

    emailField = findByTestAttr(wrapper, 'input-email');
    fill(emailField).with('elodie@example.com');
    
    passwordField = findByTestAttr(wrapper, 'input-password');
    fill(passwordField).with('1234icecream');

    passwordConfirmationField = findByTestAttr(wrapper, 'input-passwordConfirmation');
    fill(passwordConfirmationField).with('1234icecream');

    submitButton = findByTestAttr(wrapper, 'submit-form-sign-up');
    submitButton.simulate('click');

    loginPage = findByTestAttr(wrapper, 'component-login-page');
    profilePage = findByTestAttr(wrapper, 'component-profile-page');

    expect(profilePage).toHaveLength(1);
    expect(loginPage).toHaveLength(0);
    expect(profilePage.text()).toContain('Elodie');
  });
})