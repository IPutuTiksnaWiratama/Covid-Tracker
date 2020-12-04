import React, {useEffect, useState } from 'react';
import axios from "axios"
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
            <tr>
                <th>
                    <h1>
                        <p>Jumlah Kasus</p>
                        <NumberFormat value={jumlahKasus} thousandSeparator={true} displayType={'text'}/>
                    </h1>
                </th>
                <th>
                    <h1>
                        <p>Sembuh</p>
                        <NumberFormat value={sembuh} thousandSeparator={true} displayType={'text'}/>
                    </h1>
                </th>
                <th>
                    <h1>
                        <p>Meninggal</p>
                        <NumberFormat value={meninggal} thousandSeparator={true} displayType={'text'}/>
                    </h1>
                </th>
            </tr>
        </>
  ); 
};

export default CardGlobal;