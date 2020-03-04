import { mountedSetup, findByTestAttr, signUp } from '../testHelpers';
import App from '../containers/App/App';

describe('signing up', () => {
  let wrapper;
  let loginPage;
  let profilePage;

  const expectToBeTakenToTheProfilePage = () => {
    loginPage = findByTestAttr(wrapper, 'component-login-page');
    profilePage = findByTestAttr(wrapper, 'component-profile-page');

    expect(profilePage).toHaveLength(1);
    expect(loginPage).toHaveLength(0);
  }
  
  beforeEach(() => {
    wrapper = mountedSetup(App, {}, ['/login']);
  });

  test('a user named Elodie signs up correctly', () => {
    const elodie = {
      username: 'Elodie',
      email: 'elodie@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }

    signUp(wrapper, elodie);
    
    expectToBeTakenToTheProfilePage();
    expect(profilePage.text()).toContain('Elodie');
  });
})