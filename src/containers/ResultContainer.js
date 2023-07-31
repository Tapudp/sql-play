import React, { useEffect, useState } from 'react';
import CustomLoader from '../components/CustomLoader';
import CustomTable from '../components/CustomTable';
import { useAppContext } from '../context';
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
    setRows(() => utils.paginate(rows, pageNumber));
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
