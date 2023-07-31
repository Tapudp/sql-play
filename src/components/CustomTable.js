import React from 'react';
import constants from '../constants';

/**
 * helpful css to setup table in a fixed height mode
 * https://stackoverflow.com/a/72294780/8578337
 */
const CustomTable = ({ columns, rows }) => {
  return (
    <table className='table-auto border border-black w-full'>
      <thead
        className='border border-black sticky top-0 bg-red-100'
        style={constants.table.TableHeadStyles}
      >
        <tr className='border border-black'>
          {columns.map((column) => (
            <th
              className='text-left px-6 py-4 text-gray-500 dark:text-gray-400 border border-black'
              key={column.id}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='border border-black'>
        {rows.map((row) => (
          <tr className='border border-black'>
            {Object.values(row).map((value, index) => (
              <td
                className='px-6 py-4 text-gray-700 dark:text-gray-500 border border-black'
                key={index + 1}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
