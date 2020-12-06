import React, {useEffect, useState } from 'react';
import axios from "axios"
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NumberFormat from "react-number-format";

const TabProv = () => {
  const [DataProvinsi, setDataListProvinsi] = useState([]);
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
     .then((response) => { 
     setDataListProvinsi(response.data.data);
    })  
 }, []);
    console.log(DataProvinsi);
  return( 
    <center>
      <Table striped bordered hover>
    <thead style={{ textAlign: 'center', backgroundColor: '#858585' }}>
      <tr>
        <th>No</th>
        <th>Provinsi</th>
        <th>Jumlah Kasus</th>
        <th>Sembuh</th>
        <th>Meninggal</th>
      </tr>
    </thead>
    <tbody style={{ textAlign: 'center' }}>
      {DataProvinsi.map((item, index) => {
                  return(
                      <tr>
                          <th scope="row" key={item.fid}>{index + 1}</th>
                          <th>{item.provinsi}</th>
                          <th><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
                          <th><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
                          <th><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
                       </tr>
                  )
        })}
    </tbody>
  </Table>
  </center>
  );
}

export default TabProv;