import ProfilePage from './ProfilePage';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<ProfilePage />', () => {
  let wrapper;
  let profilePageComponent;

  beforeEach(() => {
    wrapper = setup(ProfilePage, { user: { username: '' } });
    profilePageComponent = findByTestAttr(wrapper, 'component-profile-page');
  });

  it('renders without error', () => {
    expect(profilePageComponent).toHaveLength(1);
  });

  const runTestWith = username => {
    wrapper = setup(ProfilePage, { user: { username } });
    expect(wrapper.text()).toContain(username);
  }

  describe('text()', () => {
    it('renders `Sam` when passed `Sam`', () => runTestWith('Sam'));
    it('renders `Elodie` when passed `Elodie`', () => runTestWith('Elodie'));
    it('renders `June` when passed `June`', () => runTestWith('June'));
  })
});
