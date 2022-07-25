import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {useContext} from 'react';
import { GlobalContext } from './context/GlobalContext';

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {countries,setItemsPerPage,setCurrentPage}=useContext(GlobalContext)

  const handleChangePage = (event, newPage) => {
      console.log(event,'event')
    setPage(newPage);
    setCurrentPage(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setItemsPerPage(event.target.value)
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={countries.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
