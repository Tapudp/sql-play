import React, { createContext, useContext, useState } from 'react';
import constants from '../constants';
import BFFService from '../service';
import utils from '../utils';

const AppContext = createContext({
  value: {
    userType: '',
  },
});

export const mapQueryToService = {
  [constants.queries.fetchAllWords]: BFFService.fetchWords,
  [constants.queries.createAWord]: BFFService.createWord,
  [constants.queries.deleteAWord]: BFFService.deleteWord,
  [constants.queries.fetchAWord]: BFFService.fetchOneWord,
  [constants.queries.updateAWord]: BFFService.updateWord,
};

// Provider
const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({
    favouriteQueries: [
      constants.queries.createAWord,
      constants.queries.deleteAWord,
      constants.queries.fetchAWord,
      constants.queries.fetchAllWords,
      constants.queries.updateAWord,
    ],
  });

  const [currentQuery, setCurrentQuery] = useState({
    query: '',
    result: {
      columns: [],
      rows: [],
    },
  });
  const [pageNumber, setPage] = useState(1);
  const [statusText, setStatusText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const makeQuery = async (queryText) => {
    setError(false);
    setLoading(true);
    let request = mapQueryToService[queryText]
      ? mapQueryToService[queryText]
      : BFFService.randomQuery;

    const result = await request(queryText);

    if (!result.success) {
      // logger.push() values to the third party logger where we can read errors
      // and set alerts to indicate engineers whenever something fails
      setError(true);
      return;
    }

    setCurrentQuery({
      query: queryText,
      result: result.data,
    });
    setPage(1);
    setStatusText(`${queryText}`);
    setLoading(false);
  };

  const changePage = (type) => {
    utils.moveScrollToTop();

    if (type === 'prev') {
      setPage((prev) => (prev > 1 ? prev - 1 : 1));
      return;
    }

    const totalAllowedPages = Math.ceil(currentQuery.result.rows.length / 10);

    setPage((prev) => {
      if (prev < totalAllowedPages) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        currentQuery,
        makeQuery,
        isLoading,
        isError,
        statusText,
        pageNumber,
        changePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Consumer
const useAppContext = () => {
  const value = useContext(AppContext);
  return value;
};

export { AppContextProvider, useAppContext };
