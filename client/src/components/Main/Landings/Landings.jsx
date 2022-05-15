import React, {useState, useEffect} from "react";
import { MapContainer, TileLayer , Marker, Popup} from 'react-leaflet';
import Markers from '../Markers';
import "./Landings.css"
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import LocationIcon from "../LocationIcon/LocationIcon";
import Form from '../Form';

function Landings() {
 /// creo los estados -- y las funciones que modificarán dichos estados
   const [value, setValue] = useState('');
   const [selected, setSelected] = useState('');
  const [landings, setLandings] = useState([]);
  const [numAst, setNum] = useState('');
   
   useEffect(() => {
    async function fetchLanding(){
      // if(selected){
        try {
          const res = await axios.get(`http://localhost:3000/api/astronomy/landings/${selected}/${value}`)
          const json = res.data
          //Antes de hacer el map hacemos un filter para sacar de la petición http los elementos a los que les faltan campos
          if (numAst !== '') {
            setLandings(json.slice(0,`${numAst}`))
          } else {
            setLandings(json)
         }
          // console.log('esto me trae landings', landings);
        } catch (error) {
          console.log('error', error)
        // }
      }
    }
    fetchLanding();
  }, [selected, value,numAst])
  const handleSubmit = (event) => {
    event.preventDefault();
    const selection = event.target.elements.selection.value;
    const content = event.target.elements.text.value;
    const num = event.target.elements.quantity.value;
    setValue(content.toUpperCase());
    setSelected(selection);
    setNum(num)
    paintMarkers()
  }
const paintMarkers = () => {
    return landings.map((landing, i) =><Markers landing={landing} key={i}/>)
  }
  return ( <section className="landingsMain">
  <form onSubmit={handleSubmit} className="formLan">
    <div className="landignsReq">
      <label htmlFor="selection">Search by: </label>
      <select name="selection">
        <option value="class">Class</option>
        <option value="mass">Mass</option>
      </select>
      <input type="text" name='text' />
      <select id="quantity">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="">All</option>
      </select>
    </div>
    <input type="submit" value='Search'/>
  </form>
  <div id="map">
    {/* <MapContainer center={[30, 0]} zoom={4} scrollWheelZoom={false} className="mapCont">
      <TileLayer attribution='&copy;
      <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {landings.map(landing=>landing.reclat?<Marker position={[landing.reclat, landing.reclong]} icon={LocationIcon}>
          <Popup>
          <ul>
            <li> Name: {landing.name}</li>
            <li>Id: {landing.id}</li>
            <li>Year: {landing.year}</li>
            <li>Class: {landing.recclass}</li>
            <li>Mass: {landing.mass}</li>
            <li>Fall: {landing.fall}</li>
            <li>Latitude: {landing.reclat}</li>
            <li>Longitude: {landing.reclong}</li>
          </ul>
          </Popup>
        </Marker>:null)}
    </MapContainer> */}
  </div>
  </section>);
}
export default Landings
