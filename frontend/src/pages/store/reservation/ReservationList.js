import React from 'react';
import { useState, useEffect } from 'react';
import "styles/pages/customer/CustomerList.scss";
import Grid from "components/Grid";
import SearchBar from "components/SearchBar";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'components/AxiosInstance';

const ReservationList = () => {

  const navigate = useNavigate();

  return (
    <div className="customer-list-container">
      <section className="title">
        <h1>예약목록</h1>
      </section>
      <section className="search-bar">
        {/* <SearchBar columns={searchColumns} searchData={searchData} /> */}
      </section>
      <section className="buttons">
        {/* <Button variant="contained" onClick={() => navigate("/store/customer/add-customer")}>등록</Button>
        <Button variant="contained" disabled={isModifyActive} onClick={() => navigate(`/store/customer/detail-customer/${selectedRow.userNo}/${selectedRow.cusNo}`)}>상세</Button> */}
      </section>
      <section className='grid'>
        {/* <Grid columns={columns} rows={rows} selectRow={selectRow} loading={loading} /> */}
      </section>
    </div>
  );
};

export default ReservationList;