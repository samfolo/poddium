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

  it('renders a logo of size 30vw x 30vw when passed 30', () => {
    wrapper = setup(Logo, { size: 30 });
    const image = findByTestAttr(wrapper, 'logo-svg');
    expect(image).toHaveLength(1);
    expect(image.prop('style').width).toEqual('30vw')
    expect(image.prop('style').height).toEqual('30vw')
  })
});
