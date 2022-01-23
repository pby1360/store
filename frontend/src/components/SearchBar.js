import React from "react";
import { useState, useEffect } from "react";
import "styles/components/SearchBar.scss";
import { Button, TextField, Select, MenuItem, FormControl, FormHelperText } from "@mui/material";

const SearchBar = ({columns, searchData}) => {

  const [ search, setSearch ] = useState({});

  useEffect(() => {
    columns.forEach(col => {
      search[col.field] = "";
    });
  }, []);

  const onChange = async (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  }

  const clickSearch = (e) => {
    e.preventDefault();
    searchData(search);
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={clickSearch} className="searchbar-form">
        <section className="searchbar-inputs">
          {columns.map((col, i) => {
            if (col.type === "combo") {
              return (
                <FormControl key={i} sx={{ m: 2, width: col.width}}>
                  <FormHelperText sx={{ m: 0, color: "#000" }}>{col.fieldName}</FormHelperText>
                  <Select
                    value={search[col.field] || ""}
                    onChange={onChange}
                    id={col.field}
                    name={col.field}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                  >
                    <MenuItem value="">
                      <em>선택하세요</em>
                    </MenuItem>
                    {col.comboData.map((com, j) => {
                      return (
                        <MenuItem key={j} value={com.value}>{com.description}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
              )
            } else if (col.type === "text") {
              return (
                <FormControl key={i} sx={{ m: 2, width: col.width}}>
                  <FormHelperText sx={{ m: 0, color: "#000" }}>{col.fieldName}</FormHelperText>
                  <TextField
                    value={search[col.field] || ""}
                    onChange={onChange}
                    id={col.field}
                    name={col.field}
                    variant="outlined"
                    size="small"
                  />
                </FormControl>
              )
            }
          })}
          {/* <FormControl sx={{ m: 2, width: 140}}>
            <FormHelperText sx={{ m: 0, color: "#000" }}>생년</FormHelperText>
            <Select
              value={search.birthYear || ""}
              onChange={onChange}
              id="birthYear"
              name="birthYear"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
            >
              <MenuItem value="">
                <em>선택하세요</em>
              </MenuItem>
              <MenuItem value={"1959"}>1959</MenuItem>
              <MenuItem value={"1991"}>1991</MenuItem>
              <MenuItem value={"1992"}>1992</MenuItem>
              <MenuItem value={"1993"}>1993</MenuItem>
              <MenuItem value={"2022"}>2022</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 2, width: 140}}>
            <FormHelperText sx={{ m: 0, color: "#000" }}>이름</FormHelperText>
            <TextField
              value={search.name || ""}
              onChange={onChange}
              id="name"
              name="name"
              variant="outlined"
              size="small"
            />
          </FormControl>
          <FormControl sx={{ m: 2, width: 140}}>
            <FormHelperText sx={{ m: 0, color: "#000" }}>연락처</FormHelperText>
            <TextField
              value={search.phoneNumber || ""}
              onChange={onChange}
              id="phoneNumber"
              name="phoneNumber"
              variant="outlined"
              size="small"
            />
          </FormControl> */}
        </section>
        <section className="searchbar-button">
          <Button type="submit" variant="contained">검색</Button>
        </section>
      </form>
    </div>
  );
};

export default SearchBar;