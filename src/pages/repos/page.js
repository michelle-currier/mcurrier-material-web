'use client';

import {
  Link,
} from '@carbon/react';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';
import { indigo, lime, pink } from "@mui/material/colors";
import { styled } from "@mui/system";
import { Container, Typography } from '@mui/material';


const octokitClient = new Octokit({});

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'links',
    header: 'Links',
  },
];
const columns = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
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
    field: 'links',
    headerName: 'Links',
    flex: 1,
      renderCell: (params) => (
        <LinkList
          url={params.row.html_url}
          homepageUrl={params.row.homepage}
        />
      ),
  },
]
// styles
const StyledLink = styled(Link)(() => ({
  backgroundColor: lime[300],
  color: indigo[500],
  fontWeight: 700,
  textDecoration: "none",
  padding: 2,
  borderRadius: 4,
  cursor: "pointer",
}));
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {

      borderRight: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      color: indigo[300],
      fontWeight: 600,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      
      borderBottom: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
    },
    '& .MuiDataGrid-cell': {
      color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
      borderRadius: 0,
    },
  }));


const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' ,listStyleType: 'none' }}>
    <li>
      <StyledLink href={url} target="_blank" underline="hover">
        GitHub
      </StyledLink>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <StyledLink href={homepageUrl} target="_blank" >Homepage</StyledLink>
      </li>
    )}
  </ul>
);
const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    key: row.id,
    stars: row.stargazers_count,
    issueCount: row.open_issues_count,
    createdAt: new Date(row.created_at).toLocaleDateString(),
    updatedAt: new Date(row.updated_at).toLocaleDateString(),
    links: <LinkList url={row.html_url} homepageUrl={row.homepage} å/>,
  }));

function RepoPage() {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getCarbonRepos() {
      const res = await octokitClient.request('GET /users/{username}/repos', {
        username: 'michelle-currier',
        // username: 'mushel',
        per_page: 23,
        sort: 'updated',
        direction: 'desc',
      });
      if (res.status === 200) {
        setRows(getRowItems(res.data));
      } else {
        setError('Error obtaining repository data');
      }
      setLoading(false);
    }

    getCarbonRepos();
  }, []);

  if (loading) {
    return (

      <>
      
      

      {/* <Grid className="repo-page">
        <Column lg={16} md={8} sm={4} className="repo-page__r1">
          <DataTableSkeleton
            columnCount={headers.length + 1}
            rowCount={10}
            headers={headers}
          />
        </Column>
      </Grid> */}
      </>
      
    );
  }

  if (error) {
    return `Error! ${error}`;
  }

  return (
    <Container maxWidth="lg">
    <Box sx={{ flexGrow: 1 }}> 
      <Typography>
            
            
      <h1>Michelle Currier's GitHub</h1>
      </Typography>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </Box>
      </Container>
  );
}

export default RepoPage;
