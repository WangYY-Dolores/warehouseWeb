import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


interface Row {
  id:
    |"Date"
    |"WarehouseID"
    |"ShippingPO"
    |"ShipmentID"
    |"BoxesRcvd"
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface RowData {
  Date: string;
  WarehouseID: string;
  ShippingPO: string;
  ShipmentID: string;
  BoxesRcvd: string;
}

const columns: readonly Row[] = [
  {id: "Date", label: "Date", minWidth: 100},
  {id: "WarehouseID", label: "WarehouseID", minWidth: 100},
  {id: "ShippingPO", label: "ShippingPO", minWidth: 100},
  {id: "ShipmentID", label: "ShipmentID", minWidth: 100},
  {id: "BoxesRcvd", label: "BoxesRcvd", minWidth: 100},
];

interface ItemTableProps {
  data: RowData[]
}
export const ItemTable = ({data}: ItemTableProps) => {
  const [page,setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  console.log(data)
  return (
    <Paper sx = {{ width: "100%", overflow: "hidden"}}>
      <TableContainer sx = {{maxHeight: 440}}>
        <Table stickyHeader aria-label = "sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style = {{ minWidth: column.minWidth}} >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
                {
                  data.map((row: RowData) => (<TableRow>
                    <TableCell key={row.Date}>{row.Date}</TableCell>
                    <TableCell key={row.WarehouseID}>{row.WarehouseID}</TableCell>
                    <TableCell key={row.ShippingPO}>{row.ShippingPO}</TableCell>
                    <TableCell key={row.ShipmentID}>{row.ShipmentID}</TableCell>
                    <TableCell key={row.BoxesRcvd}>{row.BoxesRcvd}</TableCell>
                  </TableRow>))
                }
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination 
        rowsPerPageOptions = {[10,25,100]} 
        component="div" 
        count = {rows.length} 
        rowsPerPage = {rowsPerPage} 
        page = {page} 
        onPageChange={handleChangePage} 
        onRowsPerPageChange={handleChangeRowsPerPage}/> */}
    </Paper>
  );
}
