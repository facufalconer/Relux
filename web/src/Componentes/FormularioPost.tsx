import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { DialogContent, TextField } from '@mui/material';
import axios from 'axios';
import { data } from './chart';
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


// const handleSubmit = (evt:any) => {
//    evt.preventDefault();

// }
// const handleChange = (evt:any)=>{
//   const {target} = evt ;
//   const {name,value} = target

//   const newValues = {
//     ...value,
//     [name]:value 
//   }
//   setForValue(newValues);
// }
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
console.log(forValue)

// const postRelux = () => {
//   axios.post ('http://localhost:8000/api/usuarios',{
//    nombre:forValue.nombre,
//    email:forValue.email,
//    estado:1
//   })
// }
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
}
   
  // const axiosPostCall = async () => {
  //   try {
  //     const { data } = await axios.post('http://localhost:8000/api/usuarios',  {
  //     title: "My post title",
  //     body: "My post content."
  //     })
  //     console.log(`datakk: `, data)
   
  //   } catch (error) {
 
  //     console.log(`error: `, error)
  //   }
  //    axiosPostCall()
  // }


  




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
            // value={forValue.nombre}
            onChange={handleInputChange}
            fullWidth
            variant="standard"
          /> 
   
            <TextField
            autoFocus
            margin="dense"
            
            label="Email"
            // value={forValue.email}
            onChange={handleInputChange1}
            type="email"
            fullWidth
            variant="standard"
          />
             <Button onClick={handleClose} autoFocus>
            Agree
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

