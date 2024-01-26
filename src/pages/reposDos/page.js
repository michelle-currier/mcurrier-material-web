'use client';

import RepoTable from './RepoTable';
import {
  Link,
  DataTableSkeleton,
  Pagination,
  Column,
  Grid,
} from '@carbon/react';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';
import { indigo, lime, pink } from "@mui/material/colors";
import { styled } from "@mui/system";

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
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
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
    flex: 1,
      renderCell: (params) => (
        <LinkList
          url={params.row.html_url}
          homepageUrl={params.row.homepage}
        />
      ),
  },
]
const StyledLink = styled(Link)(() => ({
  backgroundColor: lime[400],
  color: pink[500],
  fontWeight: 700,
  textDecoration: "none",
  padding: 2,
  borderRadius: 4,
  cursor: "pointer",
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
        <StyledLink href={homepageUrl}>Homepage</StyledLink>
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
    links: <LinkList url={row.html_url} homepageUrl={row.homepage} />,
  }));

function RepoPage() {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getCarbonRepos() {
      // const res = await octokitClient.request('GET /orgs/{org}/repos', {
      //   org: 'carbon-design-system',
      //   per_page: 75,
      //   sort: 'updated',
      //   direction: 'desc',
      // });
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
    <Box sx={{ flexGrow: 1 }}> 

      <DataGrid
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
  );
}

export default RepoPage;
