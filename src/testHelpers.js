import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import configureStore from 'redux-mock-store';


export const setup = (Component, props = {}, state = null) => {
  let wrapper = shallow(<Component { ...props } />);
  if (state) wrapper.setState(state);
  return wrapper;
}

export const mountedSetup = (Component, props = {}, initialEntries = ['/'], initialState = {}) => {
  // const mockStore = configureStore([]);
  // const store = mockStore(initialState);

  // let testReducer = () => ({
  //   user: {
  //     info: null,
  //     isInvalidSignUp: false,
  //     isAuthenticated: false,
  //   },
  // })

  // store.replaceReducer(testReducer);
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

export const flushPromises = () => {
  return new Promise(resolve => setImmediate(resolve));
}

export const signUp = async (wrapper, user) => {
  findByTestAttr(wrapper, 'sign-up').simulate('click');

  fill(findByTestAttr(wrapper, 'input-username')).with(user.username || '');
  fill(findByTestAttr(wrapper, 'input-email')).with(user.email || '');
  fill(findByTestAttr(wrapper, 'input-password')).with(user.password || '');
  fill(findByTestAttr(wrapper, 'input-passwordConfirmation')).with(user.passwordConfirmation || '');
  findByTestAttr(wrapper, 'component-button').simulate('click');
}
