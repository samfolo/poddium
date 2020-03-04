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

  it('renders `Sam` when passed `Sam`', () => {
    wrapper = setup(ProfilePage, { user: { username: 'Sam' } });
    expect(wrapper.text()).toContain('Sam');
  });

  it('renders `Elodie` when passed `Elodie`', () => {
    wrapper = setup(ProfilePage, { user: { username: 'Elodie' } });
    expect(wrapper.text()).toContain('Elodie');
  });
});
