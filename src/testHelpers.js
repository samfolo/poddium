import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';


export const setup = (Component, props = {}, state = null) => {
  let wrapper = shallow(<Component { ...props } />);
  if (state) wrapper.setState(state);
  return wrapper;
}

export const mountedSetup = (Component, props = {}, initialEntries = ['/'], initialState = {}) => {
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
  findByTestAttr(wrapper, 'submit-form-sign-up').prop('onClick')();

  await wrapper.update();
  await wrapper.update();
}

export const signUpAndSignIn = async (wrapper, user) => {
  await signUp(wrapper, user);
  await wrapper.update();

  let logOutButton = findByTestAttr(wrapper, 'log-out');
  logOutButton.simulate('click');

  findByTestAttr(wrapper, 'sign-in').simulate('click');
    
  fill(findByTestAttr(wrapper, 'input-email')).with(user.email || '');
  fill(findByTestAttr(wrapper, 'input-password')).with(user.password || '');
  await findByTestAttr(wrapper, 'submit-form-auth').prop('onClick')();

  await wrapper.update();
  await wrapper.update();
}

export const clickNavLink = async (wrapper, link) => {
  const navButton = findByTestAttr(wrapper, `${link}-navlink`);
  findByTestAttr(navButton, 'component-navlink').at(0).simulate('click', { button: 0 });

  await wrapper.update();
  await wrapper.update();
}

export const clickOnARandom = async (wrapper, instance) => {
  const allInstances = findByTestAttr(wrapper, instance);
  const randomIndex = Math.floor(Math.random() * allInstances.length);
  const randomInstance = allInstances.at(randomIndex);
  await randomInstance.props().onClick();

  await wrapper.update();
  await wrapper.update();
}
