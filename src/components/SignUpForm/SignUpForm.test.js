import React from 'react';
import SignUpForm from './SignUpForm';
import { setup, findByTestAttr } from '../../testHelpers';

describe('<SignUpForm />', () => {
  let wrapper;
  let signUpFormComponent;

  beforeEach(() => {
    wrapper = setup(SignUpForm);
    signUpFormComponent = findByTestAttr(wrapper, 'component-sign-up-form');
  });

  it('renders without error', () => {
    expect(signUpFormComponent).toHaveLength(1);
  });
});
