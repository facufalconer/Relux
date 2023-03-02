import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import Button from '@mui/material/Button';
import bar from'../Imagen/24320.jpg'
import { width } from "@mui/system";
import {  styled } from '@mui/material/styles';


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
export default function InputWithIcon() {
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
           width:1015,
           height:657
          }}

        src={bar}
       
     
      />
        <div
          style={{
            zIndex:2,
            position:'absolute',
            width: 250,
            height: 250,
            borderStyle: "ridge",
            borderWidth: 1,
            borderColor: "red",
            borderRadius: 10,
            backgroundColor:'white'
          }}
        >
          <div>
          <ValidationTextField
         
        required
        variant="outlined"
      
        size="small"
        id="validation-outlined-input"
        style={{marginTop:25}}
            label="Nombre"
            
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      
      />
  
 <ValidationTextField
         label="DNI"
        required
        variant="outlined"
        
        size="small"
        id="validation-outlined-input"
        style={{marginTop:15}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RecentActorsIcon/>
            </InputAdornment>
          ),
        }}
      
      />
       
          </div>
          <div style={{marginTop:70, }}>
          <Button variant="contained"size="small">Reguistrar</Button>
          <Button variant="contained"size="small"style={{marginLeft:15}}>Confirmar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
