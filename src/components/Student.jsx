import React from 'react';
import Email from './Email';
import Context from '../Context';

const Student = _ => {
  return (
    <Context.Consumer>
      { value => (value.map(student => {
        return (
          <div>
            <Email email={ student.email }/>
            { student.name }
            <hr/>
          </div>
        )
      })) }
    </Context.Consumer>
  )
}

export default Student;