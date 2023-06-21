import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import Button from '@mui/material/Button';
import bar from '../Imagen/WhatsApp Image 2023-06-14 at 2.56.47 AM.jpeg'
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import React from "react";
import Reguistrar from "./Reguister";
import useUser from "./hooks/useUser";


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
    padding: '4px !important', 
  },
});
interface IFromRegister {
  email:string,
  password:string
}

export function Login() {
  const [open, setOpen] = React.useState(false);
  const [formRegister, setForRegister] = React.useState<IFromRegister>({
    email:'',
    password:''
  })
  const { login,isLogged,isLogerLoading,hasLoginError} = useUser()
 


  const handleClickOpen = () => {
    setOpen(true);
  };

   const email1:string = formRegister.email 
   const password1:string = formRegister.password
   function onSudmit() {
    login(email1,password1)
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
            width: "70%",
            height: 500
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
            {isLogerLoading && <div    style={{
 
          }}>Checking credentials ...</div>}
     {!isLogerLoading &&
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
          }
          {
            hasLoginError && <strong style={{color:'red'}}>Credentials are invalid</strong>
          }
          <div style={{ marginTop: 70, }}>
            <Button variant="contained" size="small" onClick={handleClickOpen}>Reguistrar</Button>

           
              <Button variant="contained" size="small" style={{ marginLeft: 15, zIndex: 1 }} onClick={onSudmit} >
                Confirmar</Button>
            

          </div>
        </div>
      </div>
      {/* <Outlet /> */}

      {open! && (

        <Reguistrar
          open={open}
          setOpen={setOpen}


        />

      )}
    </div>
  );
}
