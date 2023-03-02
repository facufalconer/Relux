import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DoneIcon from '@mui/icons-material/Done';
import IconButton from '@mui/material/IconButton';
import axios from 'axios'
import {  useMutation, useQuery } from 'react-query'
import { useState } from 'react';

interface Import { open:any,setOpen:any,id:number,handleClose:any }

interface IFromValue {
  nombre:string,
  email:string,
  estado:number
}

export default function FormDialog(
   open: any,setOpen:any,id:any,handleClose:any
  ) {
  // const [data, setData] = React.useState()
  const [forValue, setForValue] = React.useState<IFromValue>({
    nombre:'',
    email:'',
    estado:1
  })
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setForValue({
        ...forValue,
         nombre:event.target.value,
     
        // [event.target.name] : event.target.value
    })
  }
  const handleInputChange1 = (event:React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setForValue({
        ...forValue,
        
        email:event.target.value
        // [event.target.name] : event.target.value
    })
  }
  // const putRelux = () => {
  //   axios.put ('http://localhost:8000/api/usuarios/11',{
  //    nombre:forValue.nombre,
  //    email:forValue.email,
  //    estado:1
  //   })
  // }
  const mutation = useMutation(
   async function ( user) {
      const res = axios.put (`http://localhost:8000/api/usuarios/${open.id}`,{
         nombre:forValue.nombre,
         email:forValue.email
   
       })
       return res
    }
  );
console.log(open.id,'es por aca')
function onSudmit() {
 mutation.mutate()
}

  // const get = () => {
  //   fetch('http://localhost:8000/api/usuarios/11') 
  //   .then(res => res.json())
  //   .then(res =>setForValue((prev) => ({
  //    ...prev,
  //    nombre:res.nombre,
  //    email:res.email
  //   })))
  //  }
  const { data } = useQuery ('usuarios', () =>
  fetch(`http://localhost:8000/api/usuarios/${open.id}`)
      .then(res => res.json())
      .then(res =>setForValue((prev) => ({
            ...prev,
            nombre:res.nombre,
            email:res.email
           })))
      
  );

  // React.useEffect(() => {
  //   const get = () => {
  //    fetch(`http://localhost:8000/api/usuarios/3`)
  //    .then(res => res.json())
  //    .then(res =>setForValue((prev) => ({
  //     ...prev,
  //     nombre:res.nombre,
  //     email:res.email
  //    })))
  //   }
  //   get()
  //  }, [])



const cerrar = () => {
setOpen(false)
} 

  return (
    <div>
    
      <Dialog
           open={open}
           onClose={cerrar}
    
       >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
     
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="nombre"
            value={forValue.nombre}
            onChange={handleInputChange}
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
           value={forValue.email}
            onChange={handleInputChange1}
            type="email"
            fullWidth
            variant="standard"
          />
    
        </DialogContent>
        <DialogActions>
        <Button onClick={() => cerrar()}>Cancelar</Button> 
        <Button onClick={() => onSudmit()}>Editar</Button> 
        </DialogActions>
      </Dialog>
    </div>
  );
}
