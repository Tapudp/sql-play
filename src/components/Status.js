import React from 'react';
import { useAppContext } from '../context';
import CustomLoader from './CustomLoader';

export default function Status() {
  const {
    isError,
    isLoading,
    currentQuery: { query, result },
    statusText,
  } = useAppContext();

  if (isLoading) {
    return <CustomLoader />;
  }

  if (isError) {
    return <div>Error while fetching results</div>;
  }

  if (!query || !statusText) {
    return <p className='text-xs'>Run a query to see results</p>;
  }

  return (
    <div className='grid gap-2'>
      <div className='text-xs cursor-default'>
        Currently serving this query : <p className='font-bold cursor-text'>{query}</p>
      </div>
      <p className='text-sm font-bold text-green-500 cursor-default'>
        Successfully fetched {result.rows.length} row{result.rows.length > 1 ? 's' : ''}
      </p>
    </div>
  );
}
