import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios'
import {  useMutation, useQuery } from 'react-query'


interface Import { open:any,setOpen:any,id:number,handleClose:any }

interface IFromValue {
  nombre:string,
  email:string,
  estado:number
}

export default function FormDialog(
   open: any,setOpen:any,id:any,handleClose:any
  ) {

  const [forValue, setForValue] = React.useState<IFromValue>({
    nombre:'',
    email:'',
    estado:1
  })
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {

    setForValue({
        ...forValue,
         nombre:event.target.value,
     
        
    })
  }
  const handleInputChange1 = (event:React.ChangeEvent<HTMLInputElement>) => {
    setForValue({
        ...forValue,
        
        email:event.target.value
        
    })
  }

  const mutation = useMutation(
   async function ( user) {
      const res = axios.put (`http://localhost:8000/api/usuarios/${open.id}`,{
         nombre:forValue.nombre,
         email:forValue.email
   
       })
       return res
    }
  );

function onSudmit() {
 mutation.mutate()
 open.setOpen(false)
}

  const { data } = useQuery ('usuarios', () =>
  fetch(`http://localhost:8000/api/usuarios/${open.id}`)
      .then(res => res.json())
      .then(res =>setForValue((prev) => ({
            ...prev,
            nombre:res.nombre,
            email:res.email
           })))
      
  );


const cerrar = () => {
open.setOpen(false)
} 

  return (
    <div>
    
      <Dialog
           open={open}
           onClose={cerrar}
    
       >
        <DialogTitle>Editar User</DialogTitle>
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
