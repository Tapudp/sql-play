import React from 'react';
import constants from '../constants';
import { useAppContext } from '../context';

export default function Pagination() {
  const {
    isLoading,
    currentQuery: {
      query,
      result: { rows },
    },
    pageNumber,
    changePage,
  } = useAppContext();

  if (isLoading || query.length === 0 || rows.length < 11) {
    return <div />;
  }

  return (
    <div className='grid grid-cols-3 gap-1 w-1/2 place-self-end'>
      <button
        className={`border rounded ${
          rows.length <= constants.table.pageSize || pageNumber === 1
            ? 'cursor-not-allowed bg-gray-100'
            : 'bg-purple-50'
        }`}
        disabled={rows.length <= constants.table.pageSize || pageNumber === 1}
        onClick={() => changePage('prev')}
      >
        Previous
      </button>
      <div className='grid place-self-center'>{pageNumber}</div>
      <button
        className={`border rounded ${
          rows.length <= constants.table.pageSize
            ? 'cursor-not-allowed bg-gray-100'
            : 'bg-indigo-50'
        }`}
        disabled={rows.length <= constants.table.pageSize}
        onClick={() => changePage('next')}
      >
        Next
      </button>
    </div>
  );
}
