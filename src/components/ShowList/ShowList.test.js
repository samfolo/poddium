import ShowList from './ShowList';
import { setup, findByTestAttr, expectLengthOf } from "../../testHelpers";

import mockResponses from '../../util/mockApiResonses';

describe('<ShowList />', () => {
  let wrapper;
  let showListComponent
  let shows;

  const getShows = (number = 20) => {
    return mockResponses.getGenericPodcasts().slice(0, number);
  }

  beforeEach(() => {
    wrapper = setup(ShowList,{ shows: getShows(5) });
    showListComponent = findByTestAttr(wrapper, 'component-show-list');
  })
  it('renders without error', () => {
    expect(showListComponent).toHaveLength(1);
  });

  describe('rendering shows', () => {
    const runTestWithShows = number => {
      shows = getShows(number)
      wrapper = setup(ShowList, { shows });
      expectLengthOf(wrapper, 'show').toBe(number);
    }

    it('renders a show when passed a single show', () => runTestWithShows(1));
    it('renders ten shows when passed ten shows', () => runTestWithShows(10));
    it('renders fourteen shows when passed fourteen shows', () => runTestWithShows(14));
    it('renders six shows when passed six shows', () => runTestWithShows(6));
  });
});
