import React, {useState, useContext,useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { landingsContext } from "../../../context/landingsContext";

const CardInfo = () => {
  const allLandings = useContext(landingsContext);
  let { id } = useParams();
  const info = allLandings.filter(land =>  land.id == id )
  const selected = info[0];
  // console.log('selected', selected.id);
  return (
    <section className="cardDitails">
      <div className="img"  >

      </div>
      <div className="infor">

      </div>
    </section>
  )
}
// style={{ backgroundImage: `url(${info.img})` }}

export default CardInfo
