import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, renderActionsCell } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import IconButton from '@mui/material/IconButton';
import FormDialog from './FormularioEdit';
import { truncate } from 'fs/promises';
import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useQuery } from 'react-query'
import { getPostById } from './Apis/GetPosr';
import SimpleDialog from './FormularioPost';



// const { data } = useQuery( () =>
// getPostById({
//       method: 'get',
//       url: 'Informe/v1/GetInformeEntradas',
//       // params: {
//       //   id: selectedRowId,
//       //   entrada: equipo1?.Id,
//       //   fromDate: fromDate,
//       //   toDate: toDate,
//       //   returnType: 'json',
//       // },
  
//     }),

// );


// React.useEffect(() => {
//   const get = () => {
//    fetch('http://localhost:8000/api/usuarios') 
//    .then(res => res.json())
//    .then(res => setData(res))
//   }
//   get()
//  }, [])

// const  fetchPlanets = async () => {
//   const res = await fetch('http://localhost:8000/api/usuarios')
//   return res.json()
// }


export const DataGridDemo = () => {
  const [Value, setValue] = useState()
  const [forValue, setForValue] = useState({
    nombre:'',
    email:''
  }
  )
  const [id, setId] = useState()
   const { data } = useQuery ('usuarios', () =>{
    axios.get(`http://localhost:8000/api/usuarios`)
    .then(response => { 
      setValue(response.data)
    })
   
   })

//  React.useEffect(() => {
//  const get = () => {
//    fetch('http://localhost:8000/api/usuarios/11') 
//    .then(res => res.json())
//    .then(res =>setForValue((prev) => ({
//     ...prev,
//     nombre:res.nombre,
//     email:res.email
//    })))
//   }
 const Delete = () => {
    axios.delete('http://localhost:8000/api/usuarios/8')
    .then(() =>{
      alert("ya lo borro cldo")
    })
 }
//  }, [])

  //  fetch(`http://localhost:8000/api/usuarios`)
  //      .then(res => res.json())
   
  
  const [open1, setOpen1] = React.useState(false);
  // const [selectedValue1, setSelectedValue1] = React.useState(emails[1]);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (value: string) => {
    setOpen1(false);
    // setSelectedValue1(value);
  };


 const [open, setOpen] = React.useState(false);




  const handleClose = () => {
    setOpen(false);
  };

 

 
  const rows1:any = React.useMemo(() => {
    if (Value === undefined) return [];
    return Value;
  }, [Value]);


 
 console.log(rows1)
 console.log(id)
  const columns: GridColDef[] = [
    {
      field: "Print",
      renderCell: (params) => {
       
        const handleClickOpen = () => {
          setOpen(true);
          setId(params.row.id)
        };
        return (
         
      <Box style={{display:'flex'}}>
        <IconButton aria-label="Example" onClick={() =>  Delete()}>
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={() => handleClickOpen()}>
        <DoneIcon/>
    </IconButton>
      </Box>

        );
      }
    },
   
    {
      field: 'nombre',
      headerName: 'Nombre',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'updatedAt',
      headerName: 'Hora',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'estado',
      headerName: 'Estado',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
 
 

  return (
    <Box >
    <Box sx={{height:657,width:'100%'}}>
       <DataGrid
         rows ={rows1}
        columns={columns}
        getRowId={(row: { id: any; }) => row.id}
       
        rowsPerPageOptions={[5]}
     
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        
      />  
   
    </Box>
{/* 
    <Dialog
           open={open}
           onClose={handleClose}
    
       >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
     
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="nombre"
            value={forValue.nombre}
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            value={forValue.email}
            type="email"
            fullWidth
            variant="standard"
          />
    
        </DialogContent>
        <DialogActions>
        <Button onClick={() => handleClose()}>Cancelar</Button> 
        <Button onClick={() => putRelux()}>editar</Button> 
        </DialogActions>
      </Dialog>  */}
      <Box sx={{backgroundColor:'red',marginTop:5}}>
      <Button variant="outlined" onClick={handleClickOpen1}>
        Open simple dialog
      </Button>
      </Box>
       {open1! && ( 

    <SimpleDialog
    open={open1}
    handleClose={handleClose1}
    setOpen={setOpen1}
    

    />
   
 )} 
   {open! && ( 

    <FormDialog
    open={open}
    handleClose={handleClose}
    setOpen={setOpen}
     id={id}

    />
   
 )}
     
    </Box>
  );
}
