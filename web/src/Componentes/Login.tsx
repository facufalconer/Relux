
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import Button from '@mui/material/Button';
import bar from '../Imagen/24320.jpg'
import { styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";
import React from "react";
import Reguistrar from "./Reguister";
import { useMutation } from "react-query";
import axios from "axios";
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 1,
    padding: '4px !important', // override inline-style
  },
});
interface IFromRegister {
  email:string,
  password:string
}
export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [formRegister, setForRegister] = React.useState<IFromRegister>({

    email:'',
    password:''
  })
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const mutation = useMutation(
    async function ( user) {
       const res = axios.post ('http://localhost:8000/api/registrar/signin',{
   
          email:formRegister.email,
          password:formRegister.password
    
        })
        return res
     }
   );
   function onSudmit() {
    mutation.mutate()
 
    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);

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
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: 1015,
            height: 657
          }}

          src={bar}


        />
        <div
          style={{
            zIndex: 2,
            position: 'absolute',
            width: 250,
            height: 250,
            borderStyle: "ridge",
            borderWidth: 1,
            borderColor: "red",
            borderRadius: 10,
            backgroundColor: 'white'
          }}
        >
          <div>
     
             <ValidationTextField

              required
              variant="outlined"
              value={formRegister.email}
              onChange={handleInputChange1}
              size="small"
              id="validation-outlined-input"
              style={{ marginTop: 25 }}
              label="Email"

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}

            /> 
    
             <ValidationTextField
              label="Clave"
              required
              type='password'
              variant="outlined"
              value={formRegister.password}
              onChange={handleInputChange2}
              size="small"
              id="validation-outlined-input"
              style={{ marginTop: 15 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RecentActorsIcon />
                  </InputAdornment>
                ),
              }}

            /> 

          </div>
          <div style={{ marginTop: 70, }}>
            <Button variant="contained" size="small" onClick={handleClickOpen}>Reguistrar</Button>

            {/* <Link to="/Formulario"> */}
              <Button variant="contained" size="small" style={{ marginLeft: 15, zIndex: 1 }} onClick={onSudmit} >
                Confirmar</Button>
            {/* </Link> */}

          </div>
        </div>
      </div>
      <Outlet />

      {open! && (

        <Reguistrar
          open={open}
          setOpen={setOpen}


        />

      )}
    </div>
  );
}
