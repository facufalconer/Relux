import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import { Login } from './Componentes/Login';
import UserContext, { UsersContextProvider } from './Componentes/Context/UserContext';
import { UserContextType } from './Componentes/Context/Type';
import { AxiosHooks } from './Componentes/hooks/axiosHooks';
import { DataGridDemo } from './Componentes/Formulario';
import { Chart } from './Componentes/chart';
import ComboBox from './Componentes/Buscador';






function App() {
  const { jwt } = useContext(UserContext) as UserContextType

  AxiosHooks(jwt)

 
  return (

    <div>
      
   
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Formulario' element={ <DataGridDemo /> } />
          <Route path='/Grafico' element={<Chart />} />
          <Route path='/Buscador' element={<ComboBox />} />


        </Routes> 

        </div>
    
  
  );
}

export default App;
