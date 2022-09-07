import React from 'react';
import ListItem from './ListItem.js';

let current_id = 3;

function App() {


  let [counter, setCounter] = React.useState(0);

  let [dataArray, setDataArray] = React.useState([
    {
      id: 1,
      name: "John Snow",
      location: "Winterfell"
    },
    {
      id: 2,
      name: "Tyrion Lannister",
      location: "Casterly Rock"
    }
  ]);

  function addData() {
    let newData  = [...dataArray];
    newData.unshift({
      id: current_id++,
      name: "Cersei Lannister",
      location: "Casterly Rock"
    });
    setDataArray(newData);
  }

  function handleIncrement() {
    setCounter(counter+1);
  }

  let elementArray = dataArray.map((person, index) => { return (
    <ListItem key={person.id} name={person.name} location={person.location} />      
  )});

  return (
    <div>
      <ul>
        {elementArray}   
      </ul>
      counter: {counter}
      <button onClick={handleIncrement}>increment</button>
      <button onClick={addData}>add Cersei</button>
    </div>
  );
  
}

export default App;
