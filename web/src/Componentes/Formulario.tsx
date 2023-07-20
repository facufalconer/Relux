import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, renderActionsCell } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import IconButton from '@mui/material/IconButton';
import FormDialog from './FormularioEdit';
import SimpleDialog from './FormularioPost';
import React, { useState, useContext, useEffect } from "react";
import useUser from './hooks/useUser';
import { useNavigate } from "react-router-dom";
import { useQuery } from 'react-query';
import DeleteUsuarios from './servecios/DeleteUsuario';
import getUsuarios from './servecios/GetUsuario';
import { Headboard } from './Headboard';
import { Grid } from '@mui/material';


export const DataGridDemo = () => {
  const [id, setId] = useState()
  const { logout, isLogged } = useUser()
  const navigate = useNavigate()


  const cerrarSecion = () => {
    logout()
    navigate('/')
  }

  useEffect(() => {
    if (!isLogged) navigate('/')

  }, [isLogged, navigate])

  const [open1, setOpen1] = React.useState(false)

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (value: string) => {
    setOpen1(false);

  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };


  const { data, refetch } = useQuery('usuarios', () =>
    getUsuarios()

  );

  // refetch()
  const rows1: any = React.useMemo(() => {
    if (data === undefined) return [];
    return data;
  }, [data]);


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
      // editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      // editable: true,
    },
    {
      field: 'updatedAt',
      headerName: 'Hora',
      type: 'number',
      width: 110,
      // editable: true,
    },
    {
      field: 'estado',
      headerName: 'Estado',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      // width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //
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
        <Box style={{ height: 500 }}>

          <DataGrid
            rows={rows1}
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
