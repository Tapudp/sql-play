/**
 * this will provide a number less than 1800 seconds to mock the
 * behaviour of API returning a result after that many mili seconds
 */
const mockSeconds = (upperLimit) => {
  return Math.floor(Math.random() * upperLimit * 1000);
};

const paginate = (rows, pageNumber) => {
  const pageSize = 10;
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return rows.slice(startIndex, endIndex);
};

const utils = {
  mockSeconds,
  paginate,
};

export default utils;
