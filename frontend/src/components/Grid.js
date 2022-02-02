import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Grid = ({columns, rows, selectRow, loading}) => {

  const clickRow = (param) => {
    selectRow(param.row);
  }

  return (
    <div>
      <section style={{ fontSize: "0.75rem", fontWeight: "700", padding: "0.25rem 1rem"}}>총 {rows.length} 건</section>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
        NoRowsOverlay
        autoHeight={true}
        onRowClick={clickRow}
        loading={loading|false}
      />
    </div>
  );
};

export default Grid;