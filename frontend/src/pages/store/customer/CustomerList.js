import React from 'react';
import { useState } from 'react';
import "styles/pages/customer/CustomerList.scss";
import Grid from "components/Grid";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {

  const navigate = useNavigate();
  
  const [isModifyActive, setModifyActive] = useState(true);
  const [selectedRow, setSelectedRow] = useState({});

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
    },
    {
      field: 'firstName',
      headerName: 'First name',
      flex: 1,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      flex: 1,
    },
    {
      field: 'age',
      headerName: 'Age',
      // type: 'number',
      flex: 1,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      flex: 1,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 15, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const selectRow = (row) => {
    setSelectedRow(row);
    setModifyActive(false);
  };

  return (
    <div className="customer-list-container">
      <section className="title">
        <h1>고객관리</h1>
      </section>
      <section className="buttons">
        <Button variant="contained" onClick={() => navigate("/store/customer/add-customer")}>등록</Button>
        <Button variant="contained" disabled={isModifyActive}>수정</Button>
      </section>
      <section className='grid'>
      <Grid columns={columns} rows={rows} selectRow={selectRow} />
      </section>
    </div>
  );
};

export default CustomerList;