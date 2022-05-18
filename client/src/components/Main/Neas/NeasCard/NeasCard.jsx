import React from 'react';
import pic_1 from '../../../../assets/asteroids/asteroid.png'
import pic_2 from '../../../../assets/asteroids/asteroid2.png'
import pic_3 from '../../../../assets/asteroids/asteroid3.png'
import pic_4  from '../../../../assets/asteroids/asteroid4.png'

function NeasCard(info, pic) {
  const picture = [pic_1, pic_2, pic_3, pic_4];
  const randomImg = () => {
    const random = Math.floor(Math.random() * (4 - 0) + 0);
    console.log('veces ', random);
    return random;
    // const shuffledArray = picture.sort((a, b) => 0.5 - Math.random());
    // console.log('suflee', shuffledArray);
    // return shuffledArray;
  }


  const { designation, orbit_class} = info.info;
  const  img = info.pic;
 
  return (
    <article className='neasCard'>
      <h3>{designation}</h3>
      <img  className='picture' src={picture[randomImg()]}  alt=""  />
      <h4>{orbit_class}</h4>
    </article>
  )
}

export default NeasCard