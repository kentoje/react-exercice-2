import React, {useEffect, useState} from 'react';
import Student from './components/Student';
import Context from './Context';
import './App.css';

const App = _ => {
  const [ students, setStudents ] = useState([])
  useEffect(_ => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => setStudents(result))
  })

  return (
    <Context.Provider value={ students }>
      <ul>
        <Student/>
      </ul>
    </Context.Provider>
  )
}

export default App;
