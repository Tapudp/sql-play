import allWordsResult from '../constants/allWordsResult.json';
import oneWordResult from '../constants/oneWordResult.json';
import updateWordResult from '../constants/updateWord.json';
import createWordResult from '../constants/createWord.json';
import deleteWordResult from '../constants/deleteWord.json';
import randomQueryResult from '../constants/randomQueryResult.json';
import utils from '../utils';

const mockFetch = (url, request) => {
  console.log(':: mock fetch :: ', url, JSON.stringify(request));
};

const fetchWords = async () => {
  const result = await mockFetch('/api/v1/words', {
    method: 'GET',
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(allWordsResult);
    }, utils.mockSeconds(2));
  });
};

const fetchOneWord = async () => {
  const result = await mockFetch('/api/v1/words', {
    method: 'GET',
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(oneWordResult);
    }, utils.mockSeconds(2));
  });
};

const createWord = async () => {
  const result = await mockFetch('/api/v1/words', {
    method: 'POST',
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(createWordResult);
    }, utils.mockSeconds(2));
  });
};

const updateWord = async () => {
  const result = await mockFetch('/api/v1/words', {
    method: 'PUT',
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(updateWordResult);
    }, utils.mockSeconds(2));
  });
};

const deleteWord = async () => {
  const result = await mockFetch('/api/v1/words', {
    method: 'DELETE',
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(deleteWordResult);
    }, utils.mockSeconds(2));
  });
};

const randomQuery = async (queryText) => {
  const result = await mockFetch('/api/v1/random-words', {
    method: 'GET',
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(randomQueryResult);
    }, utils.mockSeconds(5));
  });
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
