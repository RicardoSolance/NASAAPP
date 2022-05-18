import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import React,{ useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './styles/styles.scss';
import { landingsContext } from './context/landingsContext';

function App() {
  const [allLandings, setAlllandings] = useState([]);
  useEffect(() => {
    async function fetchlandings() {
        try {
          const res = await axios.get(`http://localhost:3000/api/astronomy/landings`)
          const data = res.data.slice(0,100);
          setAlllandings(data);
        } catch (error) {
          console.log('error', error)
      }
    }
    fetchlandings();
  }, [allLandings])

  const obj = {
    allLandings,
    setAlllandings
  }
  return (
    <div className="App">
      <landingsContext.Provider value={obj}>

     
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
        <Footer />
      </landingsContext.Provider>
    </div>
  );
}
export default App;
