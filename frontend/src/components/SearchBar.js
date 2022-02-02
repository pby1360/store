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
        </section>
        <section className="searchbar-button">
          <Button type="submit" variant="contained">검색</Button>
        </section>
      </form>
    </div>
  );
};

export default SearchBar;