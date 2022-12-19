import React from 'react';
import Columns from './Columns';
import './appStyles.css';

function Table() {
  return (
    <table className='custom'>
        <thead>
            <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <Columns />            
        </tbody>
    </table>
  )
}

export default Table