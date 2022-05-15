import React, {useState, useContext,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { landingsContext } from "../../../context/landingsContext";

const CardInfo = () => {
  const allLandings = useContext(landingsContext);
  let { id } = useParams();

  const info = allLandings.filter(land =>  land.id == id )
  const selected = info[0];

  
  

  
  
// console.log('alll context' , allLandings);
  // useEffect(() => {
  //   async function ajaxNeas() {
  //       try {
  //         const res = await axios.get(`http://localhost:3000/api/astronomy/neas`)
  //         const data = res.data.slice(0,30);
  //         setAllneas(data);
  //         // console.log('this are my neas', data);
  //       } catch (error) {
  //         console.log('error', error)
  //     }
  //   }
  //   ajaxNeas();
  // }, [])

  return (
    <div>
      <h1>vista detalle</h1>
      <h1>vista detalle</h1>
      <h1>vista detalle</h1>
      <h1>vista detalle</h1>
      <h1>vista detalle</h1>
      <h1>vista detalle</h1>
      <h1>vista detalle</h1>
    </div>
  )
}

export default CardInfo
