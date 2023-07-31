import React, { useState } from 'react';
import { useAppContext } from '../context';
import Pagination from './Pagination';
import Status from './Status';

export default function SqlEditor() {
  const { isLoading, makeQuery } = useAppContext();
  const [queryText, setQuery] = useState('');

  const handleUpdate = (event) => {
    if (!event) return;

    event.stopPropagation();

    setQuery(event.target.value);
  };

  return (
    <div className='grid grid-cols-1 grid-rows-2 items-center gap-1'>
      <div className='grid grid-cols-2'>
        <label htmlFor='sql-query' className='row-span-1 text-4xl grid gap-2'>
          Query
          <p className='text-xs'>at least 5 characters are required</p>
        </label>
        <button
          className={`grid place-content-center place-self-end w-1/4 p-2 border rounded ${
            isLoading || queryText.length < 5 ? 'cursor-not-allowed bg-red-100' : 'bg-blue-400'
          }`}
          disabled={isLoading || queryText.length < 5}
          onClick={() => makeQuery(queryText)}
        >
          Run
        </button>
      </div>
      <textarea
        id='sql-query'
        className='border border-2 rounded w-full p-2 resize-none h-full row-span-1'
        placeholder='start writing a query to see results'
        onChange={handleUpdate}
        value={queryText}
        disabled={isLoading}
      />
      <div className='grid grid-cols-2'>
        <Status />
        <Pagination />
      </div>
    </div>
  );
}
