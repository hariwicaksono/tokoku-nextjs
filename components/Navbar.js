import {Container, Row, Col, Form, Button, Navbar, Nav, NavItem, NavDropdown, Badge} from 'react-bootstrap';
import Link from 'next/link';
import UserContext from '../lib/userContext';
import Router from 'next/router';
import SearchForm from './SearchForm';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import { FiHome, FiShoppingCart, FiUser, FiUserPlus } from "react-icons/fi"

function MyNavbar() {

  const [, setUserContext] = useContext(UserContext);

  function onLogout() {
    Cookies.set('jwt', '');
    setUserContext(undefined);
    Router.push('/login');
  }

  return <Navbar className="shadow-sm border-bottom mb-3 py-1" expand="lg" sticky="top" style={{backgroundColor: '#fff'}}>
    <Container>
    <Link href="/" passHref>
      <Navbar.Brand href="/">Tokoku</Navbar.Brand>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Row>
                <Col className="collapse-brand d-lg-none d-xl-none" xs="6">
                <Link href="/" passHref>
                <Navbar.Brand href="/"> 
                TokoRia
                </Navbar.Brand>
                </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span />
                <span />
                </Navbar.Toggle>
                </Col>
        </Row>
        <Nav>
        <NavDropdown title="Kategori" id="basic-nav-dropdown">
             <NavDropdown.Item href='/page/31'>Alur Pendaftaran</NavDropdown.Item>
             <NavDropdown.Item href='/page/14'>Jenis Pendaftaran</NavDropdown.Item>
             
            </NavDropdown>
        </Nav>
        <SearchForm />
        <Nav>
        <FiShoppingCart size="1.5em"/>
                <Badge pill variant="danger" style={{position:'absolute'}}></Badge>
        </Nav>
      <UserContext.Consumer >
        {([userContext,]) => {
          if (userContext) {
            return <Nav>
              <Navbar.Text>
                Signed in as: {userContext.username}
              </Navbar.Text>
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
            </Nav>
          }

          return <Nav>
            <Link href="/login" passHref>
              <Nav.Link>Login</Nav.Link>
            </Link>
          </Nav>
        }}

      </UserContext.Consumer>
    </Navbar.Collapse>
    </Container>
  </Navbar>;
}

export default MyNavbar;