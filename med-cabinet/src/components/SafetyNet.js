// React
import React, { useState } from 'react';
// Axios
import axios from 'axios';


const SafetyNet = () => {
  const [people, setPeople] = useState([]);
  console.log(people);

  const fetchPeople = e => {
    e.preventDefault();
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(res => {
        console.log(res.data.data);
        setPeople(res.data.data);
      })
      .catch(err => console.log(err));
  }

  const bye = id => {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then(res => {
        console.log(res);
        byeFilter(id);
      })
      .catch(err => console.log(err));
  };

  const byeFilter = id => {
    let filtered = people.filter(item => item.id !== id);
    setPeople(filtered);
  };


  return (
    <div>
      <button onClick={fetchPeople}>People Button</button>
      {people && people.map((item, i) => (
        <p key={i}>
          Name: {item.first_name} <button onClick={() => bye(item.id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default SafetyNet;