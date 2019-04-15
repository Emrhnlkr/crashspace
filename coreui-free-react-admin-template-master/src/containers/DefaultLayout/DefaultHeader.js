import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/crashspace.svg.png';
import sygnet from '../../assets/img/brand/sygnet.svg';
import { Redirect } from 'react-router-dom';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
    this.logout = this.logout.bind(this);
    this.profil= this.profil.bind(this);
  }
  profil(){
    window.location='/#/Profil/Profil';
  }

  logout() {
    sessionStorage.setItem('id', '');
    sessionStorage.clear();
    window.location='/';
  }
  render() {

    if (this.state.redirect) {
      return (<Redirect to={'/login'} />)
    }

    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <i  className="fa fa-user-circle-o fa-2x" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Hesap</strong></DropdownItem>
              <DropdownItem onClick={this.profil}><i className="fa fa-lock" ></i> Profil</DropdownItem>
              <DropdownItem onClick={this.logout}><i className="fa fa-lock" ></i> Çıkış Yap</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        
        

        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
