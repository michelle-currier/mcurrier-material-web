import React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
} from '@mui/x-data-grid';



  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    // Add more columns based on your headers
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'createdAt',
      headerName: 'Created',
    },
    {
      field: 'updatedAt',
      headerName: 'Updated',
    },
    {
      field: 'issueCount',
      headerName: 'Open Issues',
    },
    {
      field: 'stars',
      headerName: 'Stars',
    },
    {
      field: 'links',
      headerName: 'Links',
    },
  ];

  const RepoTable = ({ rows, headers }) => {
    const getRowDescription = (rowId) => {
      const row = rows.find(({ id }) => id === rowId);
      return row ? row.description : '';
    };
  
    const columns = headers.map((header) => ({
      field: header.key,
      headerName: header.header,
      flex: 1,
    }));
  
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          components={{
            Toolbar: () => (
              <GridToolbarContainer>
                <GridToolbarExport />
                <GridToolbarDensitySelector />
                <GridToolbarFilterButton />
                <GridToolbarColumnsButton />
              </GridToolbarContainer>
            ),
          }}
        />
      </div>
    );
  };
  
  export default RepoTable;
