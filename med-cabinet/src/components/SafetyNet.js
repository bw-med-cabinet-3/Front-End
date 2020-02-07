// React
import React, { useState, useEffect } from 'react';
// Axios
import axios from 'axios';


const SafetyNet = () => {
  const [people, setPeople] = useState({});
  console.log(people);

  // useEffect(() => {
  //   axios
  //     .get("https://reqres.in/api/users?page=2")
  //     .then(res => {
  //       console.log(res.data.data);
  //       setPeople(res.data.data);
  //     })
  //     .catch(err => console.log(err));
  // }, [])

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


  return (
    <div>
      <button onClick={fetchPeople}>People Button</button>
      {/* {people && people.map(item => (
        <p>Name: {item.first_name}</p>
      ))} */}
    </div>
  );
};

export default SafetyNet;