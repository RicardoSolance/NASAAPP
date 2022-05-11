import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from '../Form';
import Card from '../Card';

function ListLandings() {
  const [allLandings , setAlllandings] = useState([])

  useEffect(() => {
    async function fetchlandings() {
        try {
          const res = await axios.get(`http://localhost:3000/api/astronomy/landings`)
          const data = res.data.slice(0,20);
          setAlllandings(data)
        } catch (error) {
          console.log('error', error)
      }
    }
    fetchlandings();
  }, [])
  
  
  return (
    <section className='landingscard'>
      <div className="alllandings">
      {allLandings.map((info, i) => <Card value={info} key={i} />)}
      </div>
      <aside className='aside'>
        <Form/>

      </aside>
    </section>
  )
}

export default ListLandings