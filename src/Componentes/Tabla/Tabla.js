import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { rootPath } from '../../App';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
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
export default function Tabla(props) {
    let history = useHistory();
  return (
    <TableContainer component={Paper} style={{marginTop:"20px"}}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.headers.map((header)=>(
                <StyledTableCell align="center">{header.text}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow key={row.descripcion}>
              {props.headers.map((header)=>(
                  <StyledTableCell align="center" onClick={()=>header.click(row[props.idColumn])}>{row[header.key]}</StyledTableCell>
              ))}
{/*           <StyledTableCell align="center">{row.precio}</StyledTableCell>
              <StyledTableCell align="center" onClick={()=>history.push(rootPath + '/editarproducto')}>{row.editar}</StyledTableCell>
              <StyledTableCell align="center" onClick={props.actionEliminar}>{row.eliminar}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
