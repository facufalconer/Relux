import { Box, Button, IconButton, Stack } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from "react"
import UserContext from "./Context/UserContext"
import { UserContextType } from "./Context/Type"
import useUser from "./hooks/useUser";
import { Link, useNavigate } from "react-router-dom";

export const Headboard = () => {
  const { setNum } = useContext(UserContext) as UserContextType
  
  const [open,setOpen] = useState(true)
  const {  logout } = useUser()
  const navigate = useNavigate()
  const cerrarSecion = () => {
     logout()
     navigate('/')
  }
  
  

 const Menu = () =>  {
  return(
  <div style={{display: 'flow-root',justifyContent:'end',height:100,width:100}}>
    <IconButton onClick={() => setOpen(!open)}>
  <MenuIcon />
  </IconButton>
  {!open &&(
    <Box style={{height:100,width:100,zIndex:1,opacity:'100%'}}>
  <Box style = {{border:'2px solid greenyellow',height:95,width:95}}>
      <Button variant="outlined" onClick={cerrarSecion}>
          Cerrar

        </Button>
  </Box>
  </Box>
  )}

  </div>
  )
 }
 
return(
  <Box style={{display:'flex',justifyContent:'center',padding:3}}>
   
    <Box style={{display:'flex',justifyContent:'start',height:50,width:'98%',border:'2px solid #0099CC',borderRadius:10,}}>
   
    <Menu /> 
   
     <Box sx={{display:'flex',width:'98%',justifyContent:'end','& button': { m: 1 }}}>
    <Link to="/Formulario">
    <Button size="small" variant="contained" >
       Formulario

        </Button>
      </Link>
      <Link to="/Grafico">
    <Button size="small" variant="contained"  >
       Grafico

        </Button>
      </Link>
      <Link to="/Buscador">
    <Button size="small" variant="contained" >
       Buscador

        </Button>
      </Link>
    </Box> 
   
   
    </Box>
 
  </Box>
)
}