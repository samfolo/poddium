import React from 'react';
import Classes from './NavBar.module.css';
import NavButton from '../NavButton/NavButton';
import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';

export const NavBar = props => {
  return (
    <ul className={Classes.NavBar} data-test="component-navbar">
      <NavButton data-test="home-navlink" onClick={props.onClick} link="/explore">Home</NavButton>
      <NavButton data-test="search-navlink" link="/search">Search</NavButton>
      <NavButton data-test="profile-navlink" link="/">Profile</NavButton>
    </ul>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(actionCreators.clearLoadedShow()),
  }
}

export default connect(null, mapDispatchToProps)(NavBar);
