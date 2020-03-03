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
})