import React from 'react'

function Card(props) {
  console.log(props);

  const {fall, name, id, nametype, recclass, reclat, reclong, geolo } = props.value;
  return (
    <div className='card'>
      <h1 className='title'>{name}</h1>
      <p>{fall}</p>
      <p>{id}</p>
      <p>{nametype}</p>
      
    </div>
  )
}

export default Card