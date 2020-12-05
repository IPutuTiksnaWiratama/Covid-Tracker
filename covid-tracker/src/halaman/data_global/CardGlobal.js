import React, {useEffect, useState } from 'react';
import axios from "axios"
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NumberFormat from "react-number-format";

const CardGlobal = () => {
  const [jumlahKasus, setJumlahKasus] = useState("");
  const [sembuh, setSembuh] = useState("");
  const [meninggal, setMeninggal] = useState("");
  useEffect(() => {
    axios 
     .get("https://covid19.mathdro.id/api")
     .then((response) => { 
     setJumlahKasus(response.data.confirmed.value);
     setSembuh(response.data.recovered.value);
     setMeninggal(response.data.deaths.value);
    })  
 }, []);
  return(
        <>
        <div className = "tengah">
            <tr>
                <th>
                <Card className = "ml-3" style={{
                    borderWidth: '3px',
                    borderColor: 'black',
                    background: '#ececec', 
                    textAlign: 'center',
                    }}>
                <Card.Header style = {{ background: 'orange', borderWidth: '3px', borderColor: 'black' }}>Positif</Card.Header>
                    <Card.Body>
                        <Card.Title> <NumberFormat value={jumlahKasus} thousandSeparator={true} displayType={'text'}/> </Card.Title>
                    </Card.Body>
                </Card>   
                </th>
                <th>
                <Card className = "ml-3" style={{
                    borderWidth: '3px',
                    borderColor: 'black',
                    background: '#ececec', 
                    textAlign: 'center',
                    }}>
                <Card.Header style = {{ background: '#1ad01a', borderWidth: '3px', borderColor: 'black' }}>Sembuh</Card.Header>
                    <Card.Body>
                        <Card.Title> <NumberFormat value={sembuh} thousandSeparator={true} displayType={'text'}/> </Card.Title>
                    </Card.Body>
                </Card>
                </th>
                <th>
                <Card className = "ml-3" style={{
                    borderWidth: '3px',
                    borderColor: 'black',
                    background: '#ececec', 
                    textAlign: 'center',
                    }}>
                <Card.Header style = {{ background: '#fb2424', borderWidth: '3px', borderColor: 'black' }}>Meninggal</Card.Header>
                    <Card.Body>
                        <Card.Title> <NumberFormat value={meninggal} thousandSeparator={true} displayType={'text'}/> </Card.Title>
                    </Card.Body>
                </Card>
                </th>
            </tr>
            </div>
        </>
  ); 
};

export default CardGlobal;