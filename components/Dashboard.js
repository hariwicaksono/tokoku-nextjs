import React, { useState, useContext } from "react";
import {Container, Row, Col} from 'react-bootstrap';


function Dashboard() {
  const [{ username },] = useContext(UserContext);
  return <Container>
    <Col>
      <Row>
        <p>Logged in as {username}</p>
      </Row>
    </Col>
  </Container>
};

export default Dashboard;