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
 const allLandings = useContext(landingsContext)
///-----------------------------------pagination
  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(allLandings.length / PER_PAGE);
  const _DATA = usePagination(allLandings, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
   
    <section className='landingscard'>
      <div className="alllandings">
        {_DATA.currentData().map((info, i) => <Card value={info} key={i} />)}
     
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