import App from './App';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<App />', () => {
  let wrapper;
  let appComponent;

  beforeEach(() => {
    wrapper = setup(App);
    appComponent = findByTestAttr(wrapper, 'component-app');
  });

  it('renders without error', () => {
    expect(appComponent).toHaveLength(1);
  });

  it('renders a <LoginPage /> when a user is not logged in', () => {
    wrapper = setup(App, {}, { isLoggedIn: false });
    const loginPage = findByTestAttr(wrapper, 'login-page');
    expect(loginPage).toHaveLength(1);
  });
});
