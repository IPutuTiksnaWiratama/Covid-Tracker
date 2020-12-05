import React from 'react'
import CardGlobal from './CardGlobal'
import '../../App.css'
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Data_global = () => {
    return(
        <div>
            <Card border="primary" style={{
                    marginLeft: '500px',
                    marginTop: '40px',
                    width: '35rem', 
                    textAlign: 'center' }}>
                <Card.Header>Data Global</Card.Header>
                    <Card.Body>
                        <Card.Title><CardGlobal/></Card.Title>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default Data_global;
