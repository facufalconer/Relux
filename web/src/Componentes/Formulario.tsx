import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import IconButton from '@mui/material/IconButton';
import FormDialog from './FormularioEdit';
import SimpleDialog from './FormularioPost';
import React, { useState, useContext, useEffect } from "react";
import useUser from './hooks/useUser';
import { useNavigate } from "react-router-dom";
import DeleteUsuarios from './servicios/DeleteUsuario';
import { Headboard } from './Headboard';
import { Button, Grid } from '@mui/material';
import UserContext from './Context/UserContext';
import { UserContextType } from './Context/Type';
import { useQuery } from 'react-query';
import getUsuariosunico from './servicios/GetUsuarioUnico';



export const DataGridDemo = () => {
  const [id, setId] = useState()
  const { logout, isLogged } = useUser()
  const { userBuscador, usuario, setUserId } = useContext(UserContext) as UserContextType
  const navigate = useNavigate()


  useEffect(() => {
    
   
    if (!isLogged) navigate('/')

  }, [isLogged, navigate])

  const [open1, setOpen1] = React.useState(false)


  const handleClose1 = (value: string) => {
    setOpen1(false);

  };

  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };
 

  const filter1: any = React.useMemo(() => {
    if (userBuscador === undefined) return [];
    return userBuscador;
  }, [userBuscador]);


  const columns: GridColDef[] = [
    {
      field: "Print",
      renderCell: (params) => {

        const Delete = () => {
          setId(params.row.id)
          DeleteUsuarios(id)

        }

        const handleClickOpen = () => {
          setOpen(true);
          setId(params.row.id)
        };
        return (

          <Box style={{ display: 'flex' }}>
            <IconButton aria-label="Example" onClick={() => Delete()}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleClickOpen()}>
              <DoneIcon />
            </IconButton>
          </Box>

        );
      }
    },
    {
      field: 'nombre',
      headerName: 'Nombre',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,

    },
    {
      field: 'updatedAt',
      headerName: 'Hora',
      type: 'number',
      width: 110,
    },
    {
      field: 'estado',
      headerName: 'Estado',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
    },
  ];

  return (
    <Grid container spacing={5}>
      <Grid item xs={15}>
        <Box style={{ height: 60, }}>
          <Headboard />
        </Box>
      </Grid>
      <Grid item xs={15}>
        {/* <Button onClick={() => refetch}>holaa</Button> */}
        <Box style={{ height: 490 }}>

          <DataGrid
            rows={filter1}
            columns={columns}
            getRowId={(row: { id: any; }) => row.id}

            rowsPerPageOptions={[5]}

            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}

          />
        </Box>
        {open1! && (

          <SimpleDialog
            open={open1}
            handleClose={handleClose1}
            setOpen={setOpen1}


          />

        )},
        {open! && (

          <FormDialog
            open={open}
            handleClose={handleClose}
            setOpen={setOpen}
            id={id}

          />

        )}
      </Grid>
    </Grid>

  );
}
