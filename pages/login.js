import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Login from "../components/login";
import {Container, Row, Col} from 'react-bootstrap';


function LoginPage() {
  return <>
<Layout>
<Head>
        <title>Login - {siteTitle}</title>
      </Head>
    <Container>
      <Row>
        <Col>
          <h3>Login</h3>
          <Login />
        </Col>
      </Row>
    </Container>
    </Layout>
  </>;
};

export default LoginPage; 