import ShowList from './ShowList';
import { setup, findByTestAttr } from "../../testHelpers";

describe('<ShowList />', () => {
  let wrapper;
  let showListComponent;

  beforeEach(() => {
    wrapper = setup(ShowList);
    showListComponent = findByTestAttr(wrapper, 'component-show-list');
  })
  it('renders without error', () => {
    expect(showListComponent).toHaveLength(1);
  });

  it('renders a show when passed a show', () => {})
})