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
});
