import { ProfilePage } from './ProfilePage';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';

describe('<ProfilePage />', () => {
  let wrapper;
  let profilePageComponent;

  beforeEach(() => {
    wrapper = setup(ProfilePage, { isAuth: true, info: { username: '' } });
    profilePageComponent = findByTestAttr(wrapper, 'component-profile-page');
  });

  it('renders without error', () => {
    expect(profilePageComponent).toHaveLength(1);
  });

  describe('text()', () => {
    const runTestWith = username => {
      wrapper = setup(ProfilePage, { isAuth: true, info: { username } });
      expect(wrapper.text()).toContain(username);
    }

    it('renders `Sam` when passed `Sam`', () => runTestWith('Sam'));
    it('renders `Elodie` when passed `Elodie`', () => runTestWith('Elodie'));
    it('renders `June` when passed `June`', () => runTestWith('June'));
  });

  it('renders a `Log out` button', () => {
    expectLengthOf(wrapper, 'log-out').toBe(1);
  });

  describe('`explore`', () => {
    it('renders an `explore` button', () => {
      expectLengthOf(wrapper, 'explore').toBe(1);
    });
  });
});
