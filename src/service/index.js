import allWordsResult from '../constants/allWordsResult.json';
import oneWordResult from '../constants/oneWordResult.json';
import updateWordResult from '../constants/updateWord.json';
import createWordResult from '../constants/createWord.json';
import deleteWordResult from '../constants/deleteWord.json';
import randomQueryResult from '../constants/randomQueryResult.json';
import utils from '../utils';

const mockFetch = (url, request, mockResult) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockResult);
    }, utils.mockSeconds(2));
  });
};

const fetchWords = async () => {
  const result = await mockFetch(
    '/api/v1/words',
    {
      method: 'GET',
    },
    allWordsResult
  );

  return result;
};

const fetchOneWord = async () => {
  const result = await mockFetch(
    '/api/v1/words',
    {
      method: 'GET',
    },
    oneWordResult
  );

  return result;
};

const createWord = async () => {
  const result = await mockFetch(
    '/api/v1/words',
    {
      method: 'POST',
    },
    createWordResult
  );

  return result;
};

const updateWord = async () => {
  const result = await mockFetch(
    '/api/v1/words',
    {
      method: 'PUT',
    },
    updateWordResult
  );

  return result;
};

const deleteWord = async () => {
  const result = await mockFetch(
    '/api/v1/words',
    {
      method: 'DELETE',
    },
    deleteWordResult
  );

  return result;
};

const randomQuery = async (queryText) => {
  const result = await mockFetch(
    '/api/v1/random-words',
    {
      method: 'GET',
    },
    randomQueryResult
  );

  return result;
};

const BFFService = {
  fetchWords,
  fetchOneWord,
  createWord,
  updateWord,
  deleteWord,
  randomQuery,
};

export default BFFService;
