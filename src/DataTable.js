// import {useContext} from 'react';
// import { GlobalContext } from './context/GlobalContext';

// const DataTable=()=>{
// const { countries} =useContext(GlobalContext)
//     const header=['ID','flag', 'country', 'capital', 'population', 'region']
//     console.log(header)
//     return (
//         <div>
//             <table style={{border:'solide 2px black',border: 'borderCollapse'}}>
//                 <thead>
//                     <tr>
//                 {header.map((el,index)=>(
//                      <th key={index}>{el}</th>
//                 ))}    
//                     </tr>
//                 </thead>
//                 <tbody>
                    
//                     {countries.map((item,index)=>(
//                         <tr key={index}>
//                         <td>{index+1}</td>
//                         <td>{item.flag}</td>
//                         <td>{item.name.common}</td>
//                         <td>{item.capital}</td>
//                         <td>{item.population}</td>
//                         <td>{item.region}</td>
//                         </tr>
//                     ))}
                    
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default DataTable

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {GlobalContext} from './context/GlobalContext';
import {useContext} from 'react'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function createData(flag, country, capital, population){
    return {flag, country, capital, population}
}

let rows
export default function CustomizedTables() {

const {countries,currentItems,currentPage}=useContext(GlobalContext)
countries.map((item)=>(
    rows=[
        createData(`${item.flag.png}`,`${item.name.common}`, `${item.capital}`,`${item.population}`)
            ]        
))

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>flag</StyledTableCell>
            <StyledTableCell align="left">Country</StyledTableCell>
            <StyledTableCell align="left">Capital</StyledTableCell>
            <StyledTableCell align="left">Population</StyledTableCell>
            <StyledTableCell align="left">Region</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems.map((item,index) => (
            <StyledTableRow key={item.country}>
              <StyledTableCell >{(index+1)*currentPage}</StyledTableCell>
              <StyledTableCell >{item.flag}</StyledTableCell>
              <StyledTableCell align="left">{item.name.common}</StyledTableCell>
              <StyledTableCell align="left">{item.capital}</StyledTableCell>
              <StyledTableCell align="left">{item.population}</StyledTableCell>
              <StyledTableCell align="left">{item.region}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
