import React from 'react'
import axios from 'axios';
import { useContext , useState} from 'react';
import { Link } from 'react-router-dom';
import {landingsContext} from '../../../context/landingsContext'
function Card(props) {
  const { allLandings, setAlllandings }  = useContext(landingsContext)
  const { fall, name, id, nametype, year } = props.value;

  const deleteCard = async (i) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/astronomy/landings/delete/${id}`);
      const remainingLandings = allLandings.filter((land, j) => i !== j)
      setAlllandings(remainingLandings);
    } catch (error) {
      console.log(error)
    }
    
  }
  const editCard = async () => {
    
  }
  const removeLand = (i) => {
    console.log('entra a borrar');
    const remainingLandings = allLandings.filter((land, j) => i !== j)
    console.log('remaing', remainingLandings);
    setAlllandings(remainingLandings);
  }

  return (
    // <div className='card'   style={{backgroundColor:props.color}} >
    <Link to={`/landings/list/details/${id}`}>
    <div className='card'   style={{backgroundColor:props.color}} >
        <h1 className='title'>{name}</h1>
        <p>{fall} || {nametype} || {id} </p>
        <h4>Landed in : {year}</h4>
        <div className='botones'>
          <button onClick={deleteCard}> Delete </button>
          <button > Update </button>
        </div>
      </div>
    </Link>
  )
}

export default Card