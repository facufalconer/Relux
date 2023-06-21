import { Box, Button, IconButton, Stack } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from "react"
import UserContext from "./Context/UserContext"
import { UserContextType } from "./Context/Type"
import useUser from "./hooks/useUser";
import { useNavigate } from "react-router-dom";

export const Headboard = () => {
  const { setNum } = useContext(UserContext) as UserContextType
  
  const [open,setOpen] = useState(false)
  const {  logout } = useUser()
  const navigate = useNavigate()
  const cerrarSecion = () => {
    logout()
     navigate('/')
  }
  
 const Menu = () =>  {
  return(
  <Box style={{marginLeft:'75%'}}>
    <IconButton onClick={() => setOpen(!open)}>
  <MenuIcon />
  </IconButton>
  {!open &&(
  <Box style = {{marginLeft:'-280%',marginTop:'-8%',border:'2px solid greenyellow',height:100,width:100,backgroundColor:'#ffffff'}}>
      <Button variant="outlined" onClick={cerrarSecion}>
          Cerrar

        </Button>
  </Box>
  )}

  </Box>
  )
 }
 
return(
  <Box style={{display:'flex',justifyContent:'center',padding:8}}>
    <Box style={{display:'flex',justifyContent:'start',height:50,width:'98%',border:'2px solid #0099CC',borderRadius:10}}>
    <Stack direction="row" spacing={2}>
      <Button variant="contained" size="small" 
      // onClick={ () => setNum(1)}
      
      
      >Formulario</Button>
      <Button variant="contained" size="small" 
      // onClick={ () => setNum(2)}
      >
        Grafico
      </Button>
      <Button variant="contained" size="small" href="#contained-buttons" 
      // onClick={ () => setNum(3)}
      
      >
        Buscador
      </Button>
    </Stack>
    <Box style={{marginLeft:'60%'}}>
    
    <Menu/>
    
    </Box>


    </Box>
 
  </Box>
)
}