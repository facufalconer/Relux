import React, { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Box, Grid } from '@mui/material';
import { Headboard } from './Headboard';
import { useQuery } from 'react-query';
import UserContext from './Context/UserContext';
import getUsuariosunico from './servicios/GetUsuarioUnico';
import { UserContextType } from './Context/Type';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};



export function Chart() {
  const {  usuario,} = useContext(UserContext) as UserContextType

  const { data, refetch } = useQuery('usuarios', () =>
  getUsuariosunico(usuario),

);

const lista = data.map((a:any) => a.estado)
  const dias =  data.map((a:any) => a.createdAt);

const data1 = {
  labels: dias,
  datasets: [
    {
      label: 'Dataset 1',
      data: lista,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};



  return (

    <Grid container spacing={2}>
      <Grid item xs={15}>
        <Box style={{ height: 60, }}>
          <Headboard />
        </Box>
      </Grid>
      <Grid item xs={15}>

       <Box style={{display:'flex',justifyContent:'center', width:'100%'}}>

        <Box style={{width:'75%'}}>

          <Line options={options} data={data1} />

        </Box>

        </Box>

      </Grid>
    </Grid>

  )
}
