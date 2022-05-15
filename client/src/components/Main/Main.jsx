import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Landings from './Landings';
import Neas from './Neas';
import ListLandings from './ListLandings';
import Cardinfo from './CardInfo'
const Main = () => {
  return <main className="main">
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/landings' element={<Landings/>}/>
            <Route path='/neas' element={<Neas />} />
            <Route path='/list' element={<ListLandings />} />
           <Route path='list/details/:id' element={<Cardinfo />} />
      
          </Routes>
        </main>;
};
export default Main;