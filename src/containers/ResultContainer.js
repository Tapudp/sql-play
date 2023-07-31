import React, { useEffect, useState } from 'react';
import CustomLoader from '../components/CustomLoader';
import CustomTable from '../components/CustomTable';
import { useAppContext } from '../context';
import constants from '../constants';
import utils from '../utils';

export default function ResultContainer() {
  const {
    isLoading,
    currentQuery: {
      query,
      result: { columns, rows },
    },
    pageNumber,
  } = useAppContext();

  const [rowsToShow, setRows] = useState(rows);

  useEffect(() => {
    console.log(
      ':: after slicing :: ',
      rows.slice(pageNumber - 1, pageNumber * constants.table.pageSize)
    );
    setRows((prev) => utils.paginate(rows, pageNumber));
  }, [pageNumber, rows]);

  if (isLoading) {
    return (
      <div className='grid place-items-center place-content-center py-2 h-full w-full'>
        <CustomLoader />
      </div>
    );
  }

  if (query === '') {
    return (
      <div className='grid place-items-center place-content-center py-2 h-full w-full'>
        <p>Run a query to see results</p>
      </div>
    );
  }

  return (
    <>
      <CustomTable columns={columns} rows={rowsToShow} />
    </>
  );
}
