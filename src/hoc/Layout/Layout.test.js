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

  it('renders 3 children when passed 3 children', () => {
    wrapper = setup(Layout, { children: renderChildren(3) });
    expectLengthOf(wrapper, 'child').toBe(3);
  });

  it('renders 6 children when passed 6 children', () => {
    wrapper = setup(Layout, { children: renderChildren(6) });
    expectLengthOf(wrapper, 'child').toBe(6);
  });
});
