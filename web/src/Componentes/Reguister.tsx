import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMutation } from 'react-query';
import axios from 'axios';



interface IFromRegister {
    nombre:string,
    email:string,
    password:string
  }
  
export default function Reguistrar(open: any) {

    const handleClose = () => {
        open.setOpen(false);
      };
      const [formRegister, setForRegister] = React.useState<IFromRegister>({
        nombre:'',
        email:'',
        password:''
      })

      const mutation = useMutation(
        async function ( user) {
           const res = axios.post ('http://localhost:8000/api/registrar/signup',{
              nombre:formRegister.nombre,
              email:formRegister.email,
              password:formRegister.password
        
            })
            return res
         }
       );
       function onSudmit() {
        mutation.mutate()
        open.setOpen(false)
        }
      const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {

        setForRegister({
            ...formRegister,
             nombre:event.target.value,
         
            
        })
      }
      const handleInputChange1 = (event:React.ChangeEvent<HTMLInputElement>) => {
        setForRegister({
            ...formRegister,
            
            email:event.target.value
            
        })
      }
      const handleInputChange2 = (event:React.ChangeEvent<HTMLInputElement>) => {
        setForRegister({
            ...formRegister,
            
            password:event.target.value
            
        })
      }
    
  return (
    <div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Suscribete</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            value={formRegister.nombre}
            onChange={handleInputChange}
            type="email"
            fullWidth
            variant="standard"
          />
             <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email "
            value={formRegister.email}
            onChange={handleInputChange1}
            type="email"
            fullWidth
            variant="standard"
          />
              <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Clave"
            value={formRegister.password}
            onChange={handleInputChange2}
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSudmit}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
