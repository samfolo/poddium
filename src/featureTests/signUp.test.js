import { mountedSetup, findByTestAttr, signUp } from '../testHelpers';
import App from '../containers/App/App';

describe('signing up', () => {
  let wrapper;
  let loginPage;
  let profilePage;
  let initialState = {
    user: {
      info: {}
    }
  }
  
  beforeEach(() => {
    wrapper = mountedSetup(App, {}, ['/login'], initialState);
  });

  test('a user named Elodie signs up correctly', () => {
    const elodie = {
      username: 'Elodie',
      email: 'elodie@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }

    signUp(wrapper, elodie);
    const profilePage = findByTestAttr(wrapper, 'component-profile-page');
    expect(profilePage.text()).toContain('Elodie');
  });

  test('a user named Sam signs up correctly', () => {
    const sam = {
      username: 'Sam',
      email: 'sam@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }

    signUp(wrapper, sam);
    wrapper.prop('store')
    const profilePage = findByTestAttr(wrapper, 'component-profile-page');
    expect(profilePage.text()).toContain('Sam');
  });
});
