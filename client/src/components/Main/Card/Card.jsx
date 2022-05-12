import React from 'react'
import axios from 'axios';
function Card(props) {
  // console.log(props.value);
  const {fall, name, id,nametype} = props.value;
  const deleteCard = async () => {
    console.log('el id',id)
    try {
      const res = await axios.delete(`http://localhost:3000/api/astronomy/landings/delete/${id}`)
      // console.log("esto me devuelve",res.status);
    } catch (error) {
      console.log(error)
    }
    
  }

  
  return (
    <div className='card' >
      <h1 className='title'>{name}</h1>
      <p>{fall}</p>
      <p>{id}</p>
      <p>{nametype}</p>
      <div className='botones'>
        <button onClick={deleteCard}> Delete </button>
        <button> Update </button>
      </div>
    </div>
  )
}

export default Card