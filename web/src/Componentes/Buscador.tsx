import { useMemo, useRef, useState } from 'react'; 
import TextField from '@mui/material/TextField';
import { Box, Grid } from '@mui/material';
import { Headboard } from './Headboard';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useQuery } from 'react-query';
import getUsuarios from './servecios/GetUsuario';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface IBuscador {
  label:string,
}

export default function ComboBox() {

  const debounceRef = useRef<NodeJS.Timeout>()
 
  const [buscador,setBuscador] = useState({
    id:0,
    nombre:'',
    email:'',
    estado:'',
    createdAt:''
  }) 
  const { data, refetch } = useQuery('usuarios', () =>
  getUsuarios()

);

  const filter =(TerminoBusqueda:any) => {
    var resultadosBusqueda=filter1.filter((elemento:any) => {
     if(elemento.nombre.toLowerCase().includes(TerminoBusqueda.toLowerCase()) 

     ){
     
     return(elemento)
     }
    })
    setBuscador(resultadosBusqueda) 
  }
  const onQueryChanged = (event:React.ChangeEvent<HTMLInputElement> )=>{
    if( debounceRef.current )
      clearTimeout( debounceRef.current)
      debounceRef.current = setTimeout(() =>{
        filter(event.target.value)   

      },700)
  

  }

  const columns: GridColDef[] = [
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

const filter1: any = useMemo(() => {
  if (data === undefined) return [];
  return data;
}, [data]);


const rows1: any = useMemo(() => {
  if (buscador === undefined) return [];
  return buscador;
}, [buscador]);
console.log(rows1,'hook')
function createData(
  nombre: string,
  email:string
) {
  return { nombre,email };
}



  return (

    <Grid container spacing={2}>
      <Grid item xs={15}>
        <Box style={{ height: 60, }}>
          <Headboard />
        </Box>
      </Grid>
      <Grid item xs={15}>

        <Box style={{ display: 'flex', justifyContent: 'start', width: '100%' }}>

          <Box style={{marginLeft:'1%', width: '20%' }}>


          <TextField

            onChange={onQueryChanged}
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            />

          </Box>
          <Box style={{marginLeft:'1.6%', border: '2px solid #0099CC',borderRadius:10,width:'76%',height:520 }}>
         <Box style={{ height:410 }}> 
         <DataGrid
            rows={rows1}
            columns={columns}
            getRowId={(row: { id: any; }) => row.id}

            rowsPerPageOptions={[5]}

          disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}

          />
 
           
            </Box> 
          </Box>

        </Box>

      </Grid>
    </Grid>



  );
  
}

