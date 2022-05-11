import React from 'react'

function Form() {
  return (
    <div className="formulario">
    <h1 className='title'>Crea una nueva Landing </h1>
    <form action="" method="post" className='form'>
        <input type="text" name="" id="name" placeholder="name" />
        <input type="number" name="idid" placeholder="introduce su id" />
        <input type="text" name="nametype" id="fall" placeholder="nametype" />
        <input type="number" name="mass" id="fall" placeholder="introduce su massa" />
        <input type="text" name="fall" id="fall" placeholder="introduce su fall" />
        <input type="date" name="year" id=" year" placeholder='fecha de creacion' />
        <div className="form-row">
          <input type="number" name="reclat" id="reclat"  placeholder="latitude"/>
          <input type="number" name="reclong" id="reclong"  placeholder="longitude" />
          <input type="number" name="latitude" id="latitude" placeholder="latitude"/>
          <input type="number" name="longitude" id="longitude" placeholder="longitude" />
        </div>
        <button type="submit"> Crear nueva landing</button>
    </form>
    </div>
  );
}

export default Form;
