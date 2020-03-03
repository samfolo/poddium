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

  describe('fields', () => {
    let input;

    it('renders a username field', () => {
      input = findByTestAttr(wrapper, 'input-username');
      expect(input).toHaveLength(1);
    });

    it('renders an email field', () => {
      const input = findByTestAttr(wrapper, 'input-email');
      expect(input).toHaveLength(1);
    });

    it('renders a password field', () => {
      const input = findByTestAttr(wrapper, 'input-password');
      expect(input).toHaveLength(1);
    });

    it('renders a password confirmation field', () => {
      const input = findByTestAttr(wrapper, 'input-passwordConfirmation');
      expect(input).toHaveLength(1);
    });
  })
});
