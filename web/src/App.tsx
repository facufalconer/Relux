import React from 'react';

import { DataGridDemo } from './Componentes/Formulario';
import { Routes, Route } from "react-router-dom";
import { Login } from './Componentes/Login';
import { UsersContextProvider } from './Componentes/Context/UserContext';






function App() {

  return (
  <UsersContextProvider>
    <div style={{ backgroundColor: 'pink' }} >
      
   
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Formulario' element={

            <DataGridDemo />


          } />


        </Routes> 

    </div>
    
    </UsersContextProvider>
  );
}

export default App;
