import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from '../Form';
import Card from '../Card';
import { Router, Link } from 'react-router-dom';

function ListLandings() {
  const [allLandings, setAlllandings] = useState([]);
  // let lastcolor;
  useEffect(() => {
    async function fetchlandings() {
        try {
          const res = await axios.get(`http://localhost:3000/api/astronomy/landings`)
          const data = res.data.slice(0,32);
          setAlllandings(data);
        } catch (error) {
          console.log('error', error)
      }
    }
    fetchlandings();
  }, [])
  // const randomcolor = () => {
  //   const color = ['#8B1DCA', '#031d44', '#ffb627', '#ee6055'];
    
  //   const random = Math.floor(Math.random() * (4-1)+1);
  //   let lastcolor;
  //   const randumNumber = random;
  //   let lastnumber = randumNumber;
  //   // lastcolor == color[random];
  
  //   // if (random !== lastcolor) {
  //   //   return random;
  //   // } else {
  //   //   randomcolor();
  //   // }
  //   return lastcolor;
    
  // }

  
  return (
    <section className='landingscard'>
      <div className="alllandings">
      {allLandings.map((info, i) => <Card value={info} key={i} />)}
      </div>
      <aside className='aside'>
        <Form />
    
      </aside>
    </section>
  )
}

export default ListLandings