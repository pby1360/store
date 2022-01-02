import React from 'react';
import { useState, useEffect } from 'react';
import "styles/pages/customer/CustomerList.scss";
import Grid from "components/Grid";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'components/AxiosInstance';

const CustomerList = () => {

  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [isModifyActive, setModifyActive] = useState(true);
  const [selectedRow, setSelectedRow] = useState({});

  const columns = [
    {
      field: 'cusNo',
      headerName: '고객번호',
      flex: 1,
    },
    {
      field: 'name',
      headerName: '이름',
      flex: 1,
    },
    {
      field: 'mobile',
      headerName: '연락처',
      flex: 1,
    },
    {
      field: 'birth',
      headerName: '생년월일',
      flex: 1,
    },
    {
      field: 'crtDt',
      headerName: '등록일',
      flex: 1,
    },
  ];

  useEffect(() => {
    // setLoading(true);
    const getList = async() => {
      await axios.get("/api/customer")
        .then( async (response) => {
          const data = await response.data;
          console.log(data);
          setRows(data);
        }).catch((error) => {
          console.error(error);
          // alertRef.current.handleClick("error", <span>에러가 발생 했습니다. <br />{error.message}</span>);
        }).finally(() => {
          // setLoading(false);
        })
    } 
    getList();
  }, []);

  

  const selectRow = (row) => {
    setSelectedRow(row);
    console.log(selectedRow);
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