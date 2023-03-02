import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputWithIcon from './Componentes/Login';



import {  useQuery } from 'react-query'
import {DataGridDemo }from './Componentes/Formulario';


function App() {

  return (
   
    <div style={{backgroundColor:'pink'}} >
   <DataGridDemo/>
    </div>

  );
}

export default App;
