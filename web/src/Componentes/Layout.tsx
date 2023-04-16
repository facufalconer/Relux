import React from 'react';

import { Outlet, Link } from "react-router-dom";



function Layout() {

  return (
   
    <div>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
          <li>
             <Link to="/1">First Product</Link>
           </li>
          <li>
             <Link to="/2">Second Product</Link>
             </li>
         </ul>
        </nav>
        <hr/>
        <Outlet/>
     </div>

  );
}

export default Layout;
