import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import Form from '../Form';
import Card from '../Card';
import { Router, Link } from 'react-router-dom';
import CardInfo from '../CardInfo';
import { landingsContext } from '../../../context/landingsContext';


function ListLandings() {
 const allLandings = useContext(landingsContext)

//const color = ['#8B1DCA', '#031d44', '#ffb627', '#ee6055'];
    

  console.log('ya me llega', allLandings);
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