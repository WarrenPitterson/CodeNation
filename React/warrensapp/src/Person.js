import React from 'react'; 


const Person = (props) => {
    return (
      <div>
      <h2>my Name is {props.name} and i have a {props.pet} </h2>
      </div>
    )}

export default Person;