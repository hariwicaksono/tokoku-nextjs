import React,{Component} from 'react'
import API from '../lib/axios';
import { Container, Row, Col} from 'react-bootstrap'
import {FaWhatsapp} from 'react-icons/fa';
 
class Footer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nm_web: '',
            nama_pt: '',
            alamat_pt: '',
            loading: true
        }
      
    }
    componentDidMount = () => {
          
          API.GetPengaturan().then(res => {
            setTimeout(() => this.setState({
                nm_web: res.data[0].nm_web,
                nama_pt: res.data[0].nama_pt,
                alamat_pt: res.data[0].alamat_pt,
                loading: false
            }), 100);
        })
      
      
      }
    render(){ 
     
        return(  
               
            <div className="border-0 py-5">
            <Container>
            <Row>
            <Col md={3}>
                <img src="/images/amikom-map.png" className="img-fluid py-3" width="350" alt="" />
                </Col>
                <Col md={6}>
                <h4>Info Kontak</h4>
                <h5>{this.state.nama_pt}<br/>
                <small>{this.state.alamat_pt}<br/>
                Telp: (0281) 623321<br/>
                Whatsapp: 0858 4888 8445</small></h5>
                <a href="https://pesan.link/tanyaAmikom" target="_blank" className="btn btn-success" title="Chat Kami" alt="Chat Kami" rel="noopener noreferrer"><FaWhatsapp/> Chat Kami</a>
                </Col>

                <Col md={3}>
                <h4>Scan Lokasi</h4>
                <img src="/images/amikom-qr.png" className="img-fluid" width="120" alt="" />
                </Col>
            </Row>
           
            <div className="text-white mt-3">© 2020. Universitas Amikom Purwokerto - www.amikompurwokerto.ac.id</div>
            </Container>
            </div>


        )
    }
}

export default Footer