import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
function Home() {
  const [info, setInfo] = useState('');
  useEffect(() => {
    async function fetchimage(){
        try {
          const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=4N3RGJQyDLinolyEO5E40YA0cKNubQdPxAyc4Kbi`)
          const data = res.data
          const infoHome = {
            'img': data.url,
            'title': res.data.title
          }
          
          setInfo(infoHome)
          console.log(info.img);
          // console.log('esto es res', res.data.url)
        } catch (error) {
          console.log('error', error)
      }
    }
    fetchimage();
  },[])
  return (
    <section className='home' style={{ backgroundImage: `url(${info.img})` }}>
      <iframe src="https://embed.lottiefiles.com/animation/68687" ></iframe>
      {/* <iframe src="https://embed.lottiefiles.com/animation/62787"></iframe> */}
      <h1 className='title'>{info.title}</h1>
      <p>ready to find some Asteroids ?</p>
    </section>
  )
}
export default Home









