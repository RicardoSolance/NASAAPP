import React, {useState, useContext,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { landingsContext } from "../../../context/landingsContext";

const CardInfo = () => {
  const allLandings = useContext(landingsContext);
  let { id } = useParams();
  const info = allLandings.filter(land =>  land.id == id )
  const selected = info[0];

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
