import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import { Login } from './Componentes/Login';
import UserContext, { UsersContextProvider } from './Componentes/Context/UserContext';
import { UserContextType } from './Componentes/Context/Type';
import { AxiosHooks } from './Componentes/hooks/axiosHooks';
import { Box } from '@mui/material';
import { ComponentGeneral } from './Componentes/ComponentGeneral';





function App() {
  const { jwt } = useContext(UserContext) as UserContextType

  AxiosHooks(jwt)

 
  return (

    <div>
      
   
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Formulario' element={

        <ComponentGeneral/>


          } />


        </Routes> 

        </div>
    
  
  );
}

export default App;
