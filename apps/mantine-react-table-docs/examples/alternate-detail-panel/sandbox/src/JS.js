import React, { useMemo } from 'react';
import MantineReactTable from 'mantine-react-table';
import { Box, Typography } from '@mui/material';
import { data } from './makeData';

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 50,
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'middleName',
        header: 'Middle Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
    ],
    [],
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      displayColumnDefOptions={{
        'mrt-row-expand': {
          mantineTableHeadCellProps: {
            align: 'right',
          },
          mantineTableBodyCellProps: {
            align: 'right',
          },
        },
      }}
      initialState={{ expanded: true }}
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
          }}
        >
          <Typography>Address: {row.original.address}</Typography>
          <Typography>City: {row.original.city}</Typography>
          <Typography>State: {row.original.state}</Typography>
          <Typography>Country: {row.original.country}</Typography>
        </Box>
      )}
      positionExpandColumn="last"
    />
  );
};

export default Example;