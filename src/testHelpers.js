import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

export const setup = (Component, props = {}, state = null) => {
  let wrapper = shallow(<Component { ...props } />);
  if (state) wrapper.setState(state);
  return wrapper;
}

export const mountedSetup = (Component, props = {}, initialEntries = ['/']) => {
  return mount(
    <MemoryRouter initialEntries={[...initialEntries]}>
      <Component { ...props } />
    </MemoryRouter>
  );
}

export const expectLengthOf = (wrapper, testAttr) => {
  const nodes = findByTestAttr(wrapper, testAttr);
  return {
    toBe: length => expect(nodes).toHaveLength(length),
  }
}

export const findByTestAttr = (wrapper, testAttr) => wrapper.find(`[data-test='${testAttr}']`);
export const findById = (wrapper, id) => wrapper.find({ id });
