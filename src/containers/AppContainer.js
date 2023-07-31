import React from 'react';
import SqlEditor from '../components/SqlEditor';
import ResultContainer from './ResultContainer';
import { AppContextProvider } from '../context';
import FavouritesContainer from './FavouritesContainer';

export default function AppContainer() {
  return (
    <AppContextProvider>
      <div class='grid grid-cols-4 gap-2 bg-white-100 p-2'>
        <div className='grid col-span-1 rounded'>
          <FavouritesContainer />
        </div>
        <div className='grid col-span-3 grid-rows-12 gap-1'>
          <div className='row-span-1 col-span-3 bg-gray-100 p-2 rounded'>
            <SqlEditor />
          </div>
          <div
            className='row-span-11 col-span-3 border border-2 pb-2 shadow-2xl shadow-inner bg-white block rounded'
            style={{
              height: '65vh',
              overflowY: 'auto',
            }}
          >
            <ResultContainer />
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
}
