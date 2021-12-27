import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Grid = ({columns, rows, selectRow}) => {

  const clickRow = (param) => {
    selectRow(param.row);
  }

  return (
    <div>
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
      />
    </div>
  );
};

export default Grid;