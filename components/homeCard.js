import React, {Component} from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap'

class homeCard extends Component{

    render(){ 
        return(

        <Card className="shadow-sm border my-3" body>This is some text within a card body.</Card>

        );
    }
}

export default homeCard;
