/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

// Styled Table Row
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:hover': {
    backgroundColor: theme.palette.grey[200],
    cursor: 'pointer',
  },
}));

// Styled Table Cell
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function CandidatesTable({ data, onClick }) {
  // The Table Component which is displayed on the main page. This uses material/ui table
  // On clicking the row of table it will open a side pane with the video responses for candidate
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Grid item container sm={3}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="left">Candidate Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <StyledTableRow
                key={row.id}
                onClick={() => {
                  onClick(row);
                }}
              >
                <StyledTableCell component="th" scope="row">
                  {i + 1}
                </StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}

CandidatesTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
