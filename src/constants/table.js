export const pageSize = 10;

export const TableHeadStyles = {
  position: 'sticky',
  top: 0,
};

export const columns = [
  {
    label: 'Name',
    id: 0,
    accessor: 'name',
  },
  {
    label: 'Email',
    id: 1,
    accessor: 'email',
  },
  {
    label: 'Age',
    id: 2,
    accessor: 'age',
  },
];
export const rows = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
  },
  {
    name: 'Vick Karl',
    email: 'vick.sick@carl.com',
    age: 25,
  },
];
