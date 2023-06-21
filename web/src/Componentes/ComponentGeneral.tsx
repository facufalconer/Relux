import { Box, Grid, Paper, styled } from "@mui/material"
import { Headboard } from "./Headboard"
import { DataGridDemo } from "./Formulario"
import { useContext, useState } from "react";
import { Chart } from "./chart";
import ComboBox from "./Buscador";
import UserContext from "./Context/UserContext";
import { UserContextType } from "./Context/Type";


export const ComponentGeneral = () => {
  
 
  const { num,setNum } = useContext(UserContext) as UserContextType
 
console.log('hilaa',num)


 
return(
  <Grid container spacing={2}>
  <Grid item xs={15}>
  <Box style={{height:60,}}>
   <Headboard/> 
  </Box>
  </Grid>
  <Grid item xs={15}>
    <Box style={{height:548.5,}}>
    {num  && (
      <DataGridDemo />
    )}
    {/* {num === 2 &&(
      <Chart />
    )}
    {num === 3 &&(
      <ComboBox />
    )} */}
   
    </Box>
  </Grid>
  
  {/* <DataGridDemo />  */}
  

</Grid>
      
)
} 