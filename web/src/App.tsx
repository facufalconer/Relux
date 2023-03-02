import React from 'react';
import './App.css';
import {DataGridDemo }from './Componentes/Formulario';
import { Routes,Route} from "react-router-dom";
import Layout from './Componentes/Layout';
import InputWithIcon from './Componentes/Login';

function App() {

  return (
   
    <div style={{backgroundColor:'pink'}} >
      <Routes>
        <Route path='/Login' element={<InputWithIcon/>}/>
        <Route path='/Formulario' element={<DataGridDemo/>}/>

        
      </Routes>
   {/* <DataGridDemo/> */}
    </div>

  );
}

export default App;
