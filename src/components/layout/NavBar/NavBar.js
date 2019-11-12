import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './iconecroix.png';
import './NavBar.css';
import classNames from 'classnames';

const Branding = styled.a`
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 0.5em;
`;

const StyledNavBar = styled.nav``;

class NavBar extends Component {
  state = {
    isScrolled: false
  };

  handleScroll = () => {
    window.scrollY > 0
      ? this.setState({ isScrolled: true })
      : this.setState({ isScrolled: false });
  }

  componentDidMount() {
    // Added True To End To Listen to All Events On Page
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    // Added True To End To LIsten to All Events On Page
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  render() {
    return (
      <StyledNavBar
        className={classNames("navbar navbar-expand-md navbar-dark bg-dark fixed-top", {
          "navbar-scrolled": this.state.isScrolled 
        })}
      >
        <Branding
          href="#"
          className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
        >
          <Logo src={logo} />
          Choose Pokemon !
        </Branding>
      </StyledNavBar>
    );
  }
}

export default NavBar;

