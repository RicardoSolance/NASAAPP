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
import { usePagination } from '@mui/material/Pagination';





function ListLandings() {
 const allLandings = useContext(landingsContext)
//const color = ['#8B1DCA', '#031d44', '#ffb627', '#ee6055'];
  ///pagination
const [pageNumber, setPagneNumber] = useState(0); //en que pagina estamos
const cardPerPage = 8; //cuantas cartas queremos pintar por pagina
  const visitedPages = pageNumber * cardPerPage // paginas visitadas
  const pageCount= Math.ceil(allLandings.length / cardPerPage)// nos lo redondea pa arraiba
 console.log(pageCount);
  const printCards = allLandings.slice(visitedPages, visitedPages + cardPerPage)
  console.log('print',printCards);
  
  const changePage = ({selected}) => {
    setPagneNumber(selected)
  }

  // console.log('ya me llega', allLandings);
  return (
   
    <section className='landingscard'>
      <div className="alllandings">
        {printCards.map((info, i) => <Card value={info} key={i} />)}
        
        {/* <ReactPaginate
          

        previousLabel={'previus'}
        nextLabel={'Next'}
        pageCount={pageCount}
         onPageChange={changePage}
        //  containerClassName={'paginationBtn'}s
        // previousLinkClassName={'preiousBtn'}
        // nextLinkClassName={'nextBtn'}
        // disabledClassName={'paginationDisable'}
        // activeClassName={'paginationActive'}
 
        /> */}
      <Stack spacing={2}>
          <Pagination
            count={pageCount}
            variant="outlined"
            onPageChange={changePage}
          />
         
    </Stack>
      </div>
 
      <aside className='aside'>
        <Form />
    
      </aside>
      </section>
  )
}

export default ListLandings