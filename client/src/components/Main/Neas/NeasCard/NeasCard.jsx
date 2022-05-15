import React from 'react'

function NeasCard(info, pic) {

  const { designation, orbit_class, h_mag, discovery_date } = info.info;
  const  img = info.pic;
 
  return (
    <article className='neasCard'>
      <h3>{designation}</h3>
      <img  className='picture' src={img}  alt=""  />
      <h4>{orbit_class}</h4>
    </article>
  )
}

export default NeasCard