import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import Login from "../components/Login";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

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