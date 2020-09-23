import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ButtonToggle,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styles from'../../styles/navbar.module.scss'
import SearchNavBar from '../SearchNavBar'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={props.navBarClasses} expand="md">
        <NavbarBrand href="/"><img src="./img/general/logo-white.svg"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {/* <Nav navbar className="d-flex justify-content-center w-100">
            <SearchNavBar
              firstPlaceholder="Activity"
              secondPlaceholder="Date"
              thirdPlaceholder="Location"
              inputBgColor="bg-secondary"
            />
          </Nav> */}
          <Nav navbar className="align-items-center d-flex w-100 justify-content-end">
            <NavItem>
              <NavLink className={`${styles.button_border} px-3 text-white mx-3 font-weight-bold`}>Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white mx-3 font-weight-bold">Login</NavLink>
            </NavItem>
            {/* <NavItem>
                <NavLink>
                    <ButtonToggle className="mx-1 font-weight-bold" color="primary">+ Create</ButtonToggle>{' '}
                </NavLink>
            </NavItem> */}
            {/* <NavItem>
                <NavLink>
                  <UncontrolledButtonDropdown>
                    <DropdownToggle caret className={`${styles.button_border} px-3 text-white mx-3 font-weight-bold`}>
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
