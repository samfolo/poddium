import ProfilePage from './ProfilePage';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<ProfilePage />', () => {
  let wrapper;
  let profilePageComponent;

  beforeEach(() => {
    wrapper = setup(ProfilePage);
    profilePageComponent = findByTestAttr(wrapper, 'component-profile-page');
  });

  it('renders without error', () => {
    expect(profilePageComponent).toHaveLength(1);
  });

  it('renders the `Sam` when passed `Sam`', () => {
    wrapper = setup(ProfilePage, { user: { username: 'Sam' } });
    expect(wrapper.text()).toContain('Sam');
  });
});
