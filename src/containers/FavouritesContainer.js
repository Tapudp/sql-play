import React from 'react';
import { useAppContext } from '../context';

export default function FavouritesContainer() {
  const {
    state: { favouriteQueries },
    currentQuery: { query },
    makeQuery,
  } = useAppContext();

  if (favouriteQueries.length === 0) {
    return (
      <div className='grid p-2 place-items-start place-content-start bg-green-100 rounded'>
        Bookmark queries as your favourite
      </div>
    );
  }

  return (
    <div className='grid p-2 bg-green-100 content-start gap-4 text-xs rounded'>
      <p className='text-xl'>Bookmarked Favourite queries</p>
      <div className='grid gap-2'>
        {favouriteQueries.map((item, idx) => (
          <li
            className={`grid border shadow-inner cursor-pointer hover:bg-blue-200 p-2 ${
              query === item ? 'bg-blue-400' : ''
            }`}
            key={idx + 1}
            onClick={() => makeQuery(item)}
          >
            [{idx + 1}] {item}
          </li>
        ))}
      </div>
    </div>
  );
}
