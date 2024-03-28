import React from 'react';

const Courses = () => {
  // Define the JSON data directly within the component
  const data = [
    {
      "id": 1,
      "name": "John",
      "age": 30
    },
    {
      "id": 2,
      "name": "Alice",
      "age": 25
    },
    {
      "id": 3,
      "name": "Bob",
      "age": 35
    }
  ];

  return (
    <div className='container'>
      <h2>Data List</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <div>Name: {item.name}</div>
            <div>Age: {item.age}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
