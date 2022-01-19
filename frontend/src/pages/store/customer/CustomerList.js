import React from 'react';
import { useState, useEffect } from 'react';
import "styles/pages/customer/CustomerList.scss";
import Grid from "components/Grid";
import SearchBar from "components/SearchBar";
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
      field: 'id',
      headerName: 'id',
      hide: true,
    },
    {
      field: 'cusNo',
      headerName: '고객번호',
      flex: 1,
    },
    {
      field: 'name',
      headerName: '이름',
      flex: 2,
    },
    {
      field: 'phoneNumber',
      headerName: '연락처',
      flex: 3,
    },
    {
      field: 'birth',
      headerName: '생년월일',
      flex: 3,
    },
    {
      field: 'crtDt',
      headerName: '등록일',
      flex: 3,
    },
  ];

  useEffect(() => {
    // setLoading(true);
    const getList = async() => {
      await axios.get("/api/customer")
        .then( async (response) => {
          const data = await response.data;
          data.forEach((item, index) => {
            item.id = index;
            if (item.birth) {
              item.birth = new Date(item.birth).toLocaleDateString("en-CA", { timezome: "UTC" });
            }
            // item.cusNo = item.customerId.cusNo;
            // item.userNo = item.customerId.userNo;
            item.crtDt = new Date(item.crtDt).toLocaleDateString("en-CA", { timezome: "UTC" });
          });
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
    setModifyActive(false);
  };

  return (
    <div className="customer-list-container">
      <section className="title">
        <h1>고객관리</h1>
      </section>
      <section className="search-bar">
        <SearchBar />
      </section>
      <section className="buttons">
        <Button variant="contained" onClick={() => navigate("/store/customer/add-customer")}>등록</Button>
        <Button variant="contained" disabled={isModifyActive} onClick={() => navigate(`/store/customer/detail-customer/${selectedRow.userNo}/${selectedRow.cusNo}`)}>상세</Button>
      </section>
      <section className='grid'>
      <Grid columns={columns} rows={rows} selectRow={selectRow} />
      </section>
    </div>
  );
};

export default CustomerList;