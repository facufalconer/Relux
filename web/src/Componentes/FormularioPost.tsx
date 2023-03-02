import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent, TextField } from '@mui/material';
import axios from 'axios';
import { useMutation } from 'react-query';



export interface SimpleDialogProps {
  open: boolean;
  handleClose:any
 
  setOpen:any
}
interface IFromValue {
  nombre:string,
  email:string,
  estado:number
}
export default  function SimpleDialog(  open: any,setOpen:any,_rowsId:any,handleClose:any) {
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
     const res = axios.post ('http://localhost:8000/api/usuarios',{
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
const cerrar = () => {
  open.setOpen(false)
  } 
  
  function axiosPostCall(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    throw new Error('Function not implemented.');
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        
        <ListItem disableGutters>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
         
            type="nombre"
            label="Nombre"
            onChange={handleInputChange}
            fullWidth
            variant="standard"
          /> 
   
            <TextField
            autoFocus
            margin="dense"
            label="Email"
            onChange={handleInputChange1}
            type="email"
            fullWidth
            variant="standard"
          />
             <Button onClick={cerrar} autoFocus>
            Cancelar
          </Button>
          <Button onClick={onSudmit} autoFocus>
            crear
          </Button>
          </DialogContent>
        </ListItem>
      </List>
    </Dialog>
  );
}

