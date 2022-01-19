import React from 'react';
import "styles/components/SearchBar.scss";
import { Button, TextField, Select, MenuItem, FormControl, FormHelperText } from '@mui/material';

const SearchBar = () => {
  return (
    <div className='searchbar-container'>
      <section className='searchbar-form'>
        <section className='searchbar-inputs'>
          <FormControl sx={{ m: 2, width: 140}}>
            <FormHelperText sx={{ m: 0, color: "#000" }}>label</FormHelperText>
            <Select
              // value={""}
              // onChange={handleChange}
              id=''
              name=''
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              size='small'
            >
              <MenuItem value="">
                <em>선택하세요</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 2, width: 140}}>
            <FormHelperText sx={{ m: 0, color: "#000" }}>label</FormHelperText>
            <TextField
              // onChange={onChange}
              // value={info.detailAddress}
              id=''
              name=''
              variant='outlined'
              size='small'
            />
          </FormControl>
        </section>
        <section className='searchbar-button'>
          <Button variant='contained'>검색</Button>
        </section>
      </section>
    </div>
  );
};

export default SearchBar;