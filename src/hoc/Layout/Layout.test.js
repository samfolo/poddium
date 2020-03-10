import React from 'react';
import Layout from './Layout';
import { setup, findByTestAttr, expectLengthOf } from '../../testHelpers';

describe('<Layout />', () => {
  let wrapper;
  let layoutComponent;
  const renderChildren = number => {
    return [...Array(number).keys()].map(key => {
      return <div key={key} data-test="child"/>
    });
  };

  beforeEach(() => {
    wrapper = setup(Layout);
    layoutComponent = findByTestAttr(wrapper, 'component-layout');
  });

  it('renders without error', () => {
    expect(layoutComponent).toHaveLength(1); 
  });

  describe('rendering children', () => {
    const runTestWith = number => {
      wrapper = setup(Layout, { children: renderChildren(number) });
      expectLengthOf(wrapper, 'child').toBe(number);
    }

    it('renders 14 children when passed 14 children', () => runTestWith(14));
    it('renders 3 children when passed 3 children', () => runTestWith(3));
    it('renders 6 children when passed 6 children', () => runTestWith(6));
    it('renders 1 child when passed 1 child', () => runTestWith(1));
  });

  it('renders a <NavBar />', () => expectLengthOf(wrapper, 'navbar').toBe(1));
});
