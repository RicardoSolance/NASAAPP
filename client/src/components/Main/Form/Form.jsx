import React from 'react';
import axios from 'axios';

function Form() {

  const createLanding = async (e) => {
    e.preventDefault();
   
    const newLanding = {
      name: e.target.name.value,
      id: e.target.id.value,
      nametype: e.target.nametype.value,
      recclass: e.target.recclass.value,
      mass: e.target.mass.value,
      fall: e.target.fall.value,
      year: e.target.year.value,
      reclat: e.target.reclat.value,
      reclong: e.target.reclong.value,
      geolocation: {
        latitude: e.target.reclat.value,
        longitude: e.target.reclong.value
      }
    }
    const res = await axios.post("http://localhost:3000/api/astronomy/landings/create",newLanding);
    const newLand = res.data;
    console.log(newLand)
    newLanding.from(e.target).forEach((e) => (e.value = ""));

  }
  return (
    <div className="formulario">
    <h1 className='title'>Crea una nueva Landing </h1>
      <form onSubmit={createLanding} className='form'>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="number" name="id" placeholder=" id" />
        <input type="text" name="nametype" id="fall" placeholder="Nametype" />
        <input type="number" name="mass" id="fall" placeholder="Mass" />
        <input type="text" name="fall" id="fall" placeholder="Fall" />
        <input type="text" name="recclass" id="recclass" placeholder=" Clase" />
        <input type="date" name="year" id=" year" placeholder='date' />
        <div className="form-row">
          <input type="number" name="reclat" id="reclat"  placeholder="Latitude"/>
          <input type="number" name="reclong" id="reclong"  placeholder="Longitude" />
        </div>
        <button type="submit"> Crear nueva landing</button>
    </form>
    </div>
  );
}

export default Form;
