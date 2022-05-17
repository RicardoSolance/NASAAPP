import React from 'react';
import axios from 'axios';
import { useContext , useState} from 'react';
import Form from '../Form';
import Card from '../Card';
import { Router, Link } from 'react-router-dom';
import CardInfo from '../CardInfo';
import { landingsContext } from '../../../context/landingsContext';
import ReactPaginate from 'react-paginate';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import usePagination from '../../../hooks/paginate';





function ListLandings() {
  const { allLandings, setAlllandings } = useContext(landingsContext)

  ///pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(allLandings.length / PER_PAGE);
  const _DATA = usePagination(allLandings, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  // console.log('all landings', allLandings);
  const handleSortName = () => {
    const sorted = [...allLandings].sort((a,b)=>{
      return a.name > b.name ? 1: -1
    })
    setAlllandings(sorted)
    
  };
  const handleSortYear = () => {
    const sorted = [...allLandings].sort((a,b)=>{
      return a.year > b.year ? 1: -1
    })
    setAlllandings(sorted)
  };

  const handleSortMass = () => {
    const sorted = [...allLandings].sort((a,b)=>{
      return a.mass > b.mass ? 1: -1
    })
    setAlllandings(sorted)
  };


  return (
   
    <section className='landingscard'>
      <div className="container-ladings">
        <div className='searchby'>
          <a onClick={handleSortName}>Sort by name</a>
          <a onClick={handleSortYear} >Sort by year</a>
          <a onClick={handleSortMass}>Sort by mass</a>
      </div>
      <div className="alllandings">
        {_DATA.currentData().map((info, i) => <Card value={info} key={i} />)}
      </div>
      </div>
      <div className="pagination">
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        onChange={handleChange}
      />
      </div>
      <aside className='aside'>
        <Form />
      </aside>
      </section>
  )
}

export default ListLandings