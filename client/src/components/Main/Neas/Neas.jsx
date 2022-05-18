import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NeasCard from './NeasCard';
import pic_1 from '../../../assets/asteroids/asteroid.png';
import pic_2 from '../../../assets/asteroids/asteroid2.png';
import pic_3 from '../../../assets/asteroids/asteroid3.png';
import pic_4 from '../../../assets/asteroids/asteroid4.png';
import plus from '../../../assets/plus.png';


function Neas() {
  const [Allneas, setAllneas] = useState([]);

  useEffect(() => {
    async function ajaxNeas() {
        try {
          const res = await axios.get(`http://localhost:3000/api/astronomy/neas`)
          const data = res.data.slice(0,32);
          setAllneas(data);
          // console.log('this are my neas', data);
        } catch (error) {
          console.log('error', error)
      }
    }
    ajaxNeas();
  }, [])


  return (
    <section className='neas-section'>
      <div className="allneas">
      {Allneas.map((neas, i) => <NeasCard info={neas} key={i}  />)}
      </div>
      <div className='plus'>
         <img src={plus} />
      </div>
    </section>
  )
}

export default Neas


