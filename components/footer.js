import React, {Component} from 'react'
import API from '../libs/axios';
import { Container, Row, Col} from 'react-bootstrap'
import {FaWhatsapp} from 'react-icons/fa';
 
class Footer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nama_web: '',
            nama_pt: '',
            alamat_pt: '',
            telp_pt: '',
            email_pt: '',
            url: '',
            loading: true
        }
      
    }
    componentDidMount = () => {
          
          API.GetPengaturan().then(res => {
            setTimeout(() => this.setState({
                nama_web: res.data[0].nama_web,
                nama_pt: res.data[0].nama_pt,
                alamat_pt: res.data[0].alamat_pt,
                telp_pt: res.data[0].telp_pt,
                email_pt: res.data[0].email_pt,
                url: res.data[0].url,
                loading: false
            }), 100);
        })
      
      
      }
    render(){ 
     const {url} = this.state
        return(  
               
            <section className="border-0 py-5" style={{backgroundColor: '#f2f2f2'}}>
            <Container>
            <Row>
           
                <Col md={6}>
                <h5>Hubungi Kami</h5>
                <h4>{this.state.nama_pt}<br/>
                <small>{this.state.alamat_pt}<br/>
                Telp: {this.state.telp_pt}<br/>
                </small></h4>
                <a href="" target="_blank" className="btn btn-success" title="Chat Kami" alt="Chat Kami" rel="noopener noreferrer"><FaWhatsapp/> Chat Kami</a>
                </Col>

                <Col md={3}>
                
                </Col>
            </Row>
           
            <div className="mt-4">© 2020. {this.state.nama_web} {this.state.nama_pt} {url}</div>
            </Container>
            </section>


        )
    }
}

export default Footer;