import React from "react";

import {Link} from 'react-router-dom';
function Nav() {
  return (
    <div className='nav'>
      <Link className='nav__element' to='/'>Home</Link>
      
      <Link className='nav__element' to='/landings'>Landings</Link>

      <Link className='nav__element' to='/neas'>Neas</Link>
   
      <Link className='nav__element' to='/landings/List'>List Landings</Link>
    </div>
  )
}
export default Nav