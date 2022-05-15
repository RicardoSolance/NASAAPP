import React from 'react'
import axios from 'axios';
import {Link } from 'react-router-dom';
function Card(props) {
  // console.log(props.value);
  const { fall, name, id, nametype } = props.value;

  const deleteCard = async () => {
    console.log('el id',id)
    try {
      const res = await axios.delete(`http://localhost:3000/api/astronomy/landings/delete/${id}`)
      // console.log("esto me devuelve",res.status);
    } catch (error) {
      console.log(error)
    }
    
  }

 

  const editCard = async () => {
    
  }

  
  return (
    // <div className='card'   style={{backgroundColor:props.color}} >
    <Link to={`/landings/list/details/${id}`}>
    <div className='card'   style={{backgroundColor:props.color}} >
        <h1 className='title'>{name}</h1>
        <p>{fall} || {nametype} || {id} </p>
    
        <div className='botones'>
          <button onClick={deleteCard}> Delete </button>
          <button > Update </button>
        </div>
      </div>
    </Link>
  )
}

export default Card