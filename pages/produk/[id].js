import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import API from '../../libs/axios';
import {ImagesUrl} from '../../libs/url';
import { Container, Row, Col, Card } from 'react-bootstrap';


class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
        id: '',
        nama: '',
        harga: '',
        gambar: '',
        deskripsi: '',
        url: ImagesUrl()
        
    }
} 
static async getInitialProps ({ query }) {
  const id = query.id

  return {
    id: id
  }
}

  componentDidMount = () => {
    const id = this.props.id
        API.GetProdukId(id).then(res=>{
          console.log(res)
            this.setState({
                id: res.data[0].id,
                nama : res.data[0].nama,
                harga: res.data[0].harga,
                gambar: res.data[0].gambar,
                deskripsi: res.data[0].deskripsi  
            })
        })
}
  render() {
 
  return (
    <Layout>
      <Head>
        <title>{this.state.nama} - {this.props.metaData[0].nama_web} {this.props.metaData[0].nama_pt}</title>
      </Head>
      <Container>
      <Card className="mb-4" body>
      <Row>
        <Col md={4}>
        <img src={this.state.url+"/products/"+this.state.gambar} alt={this.state.nama} />
        </Col>
        <Col md={8}>
        <h1>{this.state.nama}</h1>
        <p className="lead">{this.state.deskripsi}</p>       
        <h3 className="text-danger">Rp.{this.state.harga}</h3>               
        </Col>
      </Row>
      </Card>
    
        
  </Container>
    </Layout>
  );
}
}


export default Detail