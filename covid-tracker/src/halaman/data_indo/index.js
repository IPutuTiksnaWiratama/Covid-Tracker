import React from 'react'
import CardIndo from "./CardIndo"
import '../../App.css'
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Data_indo = () => {
    return (
        <div>
            <center>
            <Card border="primary" style={{
                    marginTop: '40px',
                    width: '35rem', 
                    textAlign: 'center' }}>
                <Card.Header>Data Covid-19 Indonesia</Card.Header>
                    <Card.Body>
                        <Card.Title> <CardIndo/> </Card.Title>
                    </Card.Body>
            </Card>
            </center>
        </div>
    )
}

export default Data_indo;