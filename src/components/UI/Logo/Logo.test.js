import Logo from './Logo';
import { setup, findByTestAttr, expectLengthOf } from '../../../testHelpers';

describe('<Logo />', () => {
  let wrapper;
  let logoComponent;

  beforeEach(() => {
    wrapper = setup(Logo);
    logoComponent = findByTestAttr(wrapper, 'component-logo');
  });

  it('renders without error', () => {
    expect(logoComponent).toHaveLength(1);
  });

  describe('rendering a logo with a size prop', () => {
    const runTestWith = size => {
      wrapper = setup(Logo, { size });
      const image = findByTestAttr(wrapper, 'logo-svg');
  
      expect(image).toHaveLength(1);
      expect(image.prop('style').width).toEqual(`${size}vw`)
      expect(image.prop('style').height).toEqual(`${size}vw`)
    }

    it('renders a logo of size 30vw x 30vw when passed 30', () => runTestWith(30));
    it('renders a logo of size 65vw x 65vw when passed 65', () => runTestWith(65));
    it('renders a logo of size 23vw x 23vw when passed 23', () => runTestWith(23));
    it('renders a logo of size 2vw x 2vw when passed 2', () => runTestWith(2));
  })
});
