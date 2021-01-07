import React, { Component, useState, useContext } from 'react';
import {Container, Row, Col, Form, Button, Navbar, Nav, NavItem, NavDropdown, Badge, Modal} from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import SearchForm from './searchForm';
import Cookies from 'js-cookie';
import { FiHome, FiShoppingCart, FiUser, FiUserPlus } from "react-icons/fi"

function Cart(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  variant="link" className="text-secondary" onClick={handleShow}>
      <FiShoppingCart size="1.5em"/> {props.cartCount ? <span className="text-danger">{props.cartCount}</span> : ""}
      </Button>

      <Modal show={show} size="lg" onHide={handleClose} animation={true} backdrop="static" keyboard={false} style={{top:60}}>
        <Modal.Header closeButton>
          <Modal.Title>Keranjang</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.cartCount ? <span className="text-danger">{props.cartCount}</span> : ""}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="success" onClick={handleClose}>
            Pesan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
class MyNavbar extends Component {

   onLogout() {
    Cookies.set('jwt', '');
    setUserContext(undefined);
    Router.push('/login');
  }
render() {
  return (
    <Navbar className="shadow border-bottom mb-4" expand="lg" sticky="top" style={{backgroundColor: '#fff', height:'60px'}}>
    <Container>
    <Link href="/" passHref>
    <Navbar.Brand href="/">{this.props.config[0].nm_web}</Navbar.Brand>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Row>
                <Col className="collapse-brand d-lg-none d-xl-none" xs="6">
                <Link href="/" passHref>
                <Navbar.Brand href="/"> 
                {this.props.config[0].nm_web}
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
        
        <Nav>
        <Cart cartCount={this.props.cartCount} />
        </Nav>
      
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
}

export default MyNavbar;