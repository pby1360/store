import React from 'react';
import { useState } from 'react';
import "styles/pages/customer/AddCustomer.scss";
import { Button, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const AddCustomer = () => {

  const navigate = useNavigate();

  const addCustomer = async(e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className='add-customer-container'>
      <section className="title">
        <h1>고객등록</h1>
      </section>
      <section className='form'>
        <form onSubmit={addCustomer}>
          <section className='input-form'>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>이름</InputLabel>
                <TextField id='' className='' fullWidth={true} variant='outlined' size='small' required />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>생년월일</InputLabel>
                <section className='input-form-item-select'>
                  <Select
                    // value={age}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth={true}
                    size='small'
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <Select
                    // value={age}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth={true}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <Select
                    // value={age}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth={true}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </section>
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>연락처</InputLabel>
                <TextField id='' className='' variant='outlined' size='small' required />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>주소</InputLabel>
                <TextField id='' className='' variant='outlined' size='small' required />
              </section>
            </section>
            <section className='input-form-row'>
              <section className='input-form-item'>
                <InputLabel>이메일</InputLabel>
                <TextField id='' className='' variant='outlined' size='small' required />
              </section>
            </section>
          </section>
          <section className="buttons">
            <Button type="submit" variant='contained'>저장</Button>
            <Button type="button" onClick={() => navigate(-1)} variant='contained'>목록</Button>
          </section>
        </form>
      </section>
    </div>
  );
};

export default AddCustomer;