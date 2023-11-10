import { Box, Button, IconButton, Stack, TextField } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useEffect, useRef, useState } from "react"
import UserContext from "./Context/UserContext"
import { UserContextType } from "./Context/Type"
import useUser from "./hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useQuery } from "react-query";
import getUsuariosunico from "./servicios/GetUsuarioUnico";


export const Headboard = () => {
  const { usuario, setUserBuscador, } = useContext(UserContext) as UserContextType

  const [open, setOpen] = useState(true)
  const debounceRef = useRef<NodeJS.Timeout>()
  const [buscador, setBuscador] = useState({
    id: 0,
    nombre: '',
    email: '',
    estado: '',
    createdAt: ''
  })
  const { logout } = useUser()
  const navigate = useNavigate()
  const cerrarSecion = () => {
    logout()
    navigate('/')
  }


  const { data, refetch } = useQuery('usuarios', () =>

    getUsuariosunico(usuario),

  );
  const filter1: any = React.useMemo(() => {
    if (data === undefined) return [];
    return data;
  }, [data]);

  const filter = (TerminoBusqueda: any) => {
    var resultadosBusqueda = filter1.filter((elemento: any) => {
      if (elemento.nombre.toLowerCase().includes(TerminoBusqueda.toLowerCase())

      ) {

        return (elemento)
      }
    })
    setBuscador(resultadosBusqueda)
  }
  const onQueryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current)
      clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      filter(event.target.value)

    }, 700)


  }


  setUserBuscador(buscador)

  const Menu = () => {
    return (
      <div style={{ display: 'flow-root', justifyContent: 'end', position: 'absolute', height: 100, width: 100 }}>
        <IconButton onClick={() => setOpen(!open)}>
          <MenuIcon />
        </IconButton>
        {!open && (
          <Box style={{ height: 100, width: 100, zIndex: 1, opacity: '100%', backgroundColor: 'red' }}>
            <Box style={{ border: '2px solid greenyellow', height: 95, width: 95 }}>
              <Button variant="outlined" onClick={cerrarSecion}>
                Cerrar

              </Button>
            </Box>
          </Box>
        )}

      </div>
    )
  }

  return (
    <Box style={{ display: 'flex', justifyContent: 'center', padding: 3 }}>

      <Box style={{ display: 'flex', justifyContent: 'start', height: 50, width: '98%', border: '2px solid #0099CC', borderRadius: 10, }}>
        <Box style={{ display: 'flex', justifyContent: 'start', width: '180%' }}>
          <Menu />

          <TextField
            style={{ marginLeft: '60%', marginTop: '0.5%' }}
            size="small"
            onChange={onQueryChanged}
            id="outlined-basic"
            label="Buscador"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: 'flex', width: '98%', justifyContent: 'end', '& button': { m: 1 } }}>
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
        </Box>


      </Box>

    </Box>
  )
}