import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import store from './store';


export const setup = (Component, props = {}, state = null) => {
  let wrapper = shallow(<Component { ...props } />);
  if (state) wrapper.setState(state);
  return wrapper;
}

export const mountedSetup = (Component, props = {}, initialEntries = ['/'], initialState = {}) => {
  const mockStore = configureStore([thunk]);
  
  // console.log(store)
  return mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={[...initialEntries]}>
        <Component { ...props } />
      </MemoryRouter>
    </Provider>
  );
}

export const expectLengthOf = (wrapper, testAttr) => {
  const nodes = findByTestAttr(wrapper, testAttr);
  return {
    toBe: length => expect(nodes).toHaveLength(length),
  }
}

export const fill = field => ({ with: value => field.simulate('change', { target: { value } }) });
export const findByTestAttr = (wrapper, testAttr) => wrapper.find(`[data-test='${testAttr}']`);
export const findById = (wrapper, id) => wrapper.find({ id });


export const signUp = (wrapper, data) => {
  findByTestAttr(wrapper, 'sign-up').simulate('click');

  fill(findByTestAttr(wrapper, 'input-username')).with(data.username || '');
  fill(findByTestAttr(wrapper, 'input-email')).with(data.email || '');
  fill(findByTestAttr(wrapper, 'input-password')).with(data.password || '');
  fill(findByTestAttr(wrapper, 'input-passwordConfirmation')).with(data.passwordConfirmation || '');

  findByTestAttr(wrapper, 'submit-form-sign-up').simulate('click');
}
