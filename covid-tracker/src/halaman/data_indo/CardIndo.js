import React, {useEffect, useState } from 'react';
import axios from "axios"
import NumberFormat from "react-number-format";

const CardIndo = () => {
  const [jumlahKasus, setJumlahKasus] = useState("");
  const [meninggal, setMeninggal] = useState("");
  const [sembuh, setSembuh] = useState("");
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api")
     .then((response) => { 
     setJumlahKasus(response.data.jumlahKasus);
     setMeninggal(response.data.meninggal);
     setSembuh(response.data.sembuh);
    })  
 }, []);
  return(
        <>
            <tr>
                <th>
                    <h1 className="card1">
                        <p>Positif</p>
                        <NumberFormat value={jumlahKasus} thousandSeparator={true} displayType={'text'}/>
                    </h1>
                </th>
                <th>
                    <h1 className="card2">
                        <p>Sembuh</p>
                        <NumberFormat value={sembuh} thousandSeparator={true} displayType={'text'}/>
                    </h1>
                </th>
                <th>
                    <h1 className="card3">
                        <p>Meninggal</p>
                        <NumberFormat value={meninggal} thousandSeparator={true} displayType={'text'}/>
                    </h1>
                </th>
            </tr>
        </>
  ); 
};

export default CardIndo;