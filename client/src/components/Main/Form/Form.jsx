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
   

  }
  return (
    <div className="formulario">
    <h1 className='title'>Crea una nueva Landing </h1>
      <form onSubmit={createLanding} className='form'>
        <input type="text" name="name" id="name" placeholder="name" />
        <input type="number" name="id" placeholder="introduce su id" />
        <input type="text" name="nametype" id="fall" placeholder="nametype" />
        <input type="number" name="mass" id="fall" placeholder="introduce su massa" />
        <input type="text" name="fall" id="fall" placeholder="introduce su fall" />
        <input type="text" name="recclass" id="recclass" placeholder="introduce su  clase" />
        <input type="date" name="year" id=" year" placeholder='fecha de creacion' />
        <div className="form-row">
          <input type="number" name="reclat" id="reclat"  placeholder="latitude"/>
          <input type="number" name="reclong" id="reclong"  placeholder="longitude" />
        </div>
        <button type="submit"> Crear nueva landing</button>
    </form>
    </div>
  );
}

export default Form;
