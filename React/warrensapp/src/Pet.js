import React from 'react'; 


const Pet = (props) => {
  console.log(props);
    return (
      <div>
      <h3>
      My name is {props.name} and i have a {props.pet}</h3>
      </div>
    )
  }

export default Pet;