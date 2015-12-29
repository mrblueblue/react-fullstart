import React from 'react';

export const List = ({data, RowItem}) => (
  <ul>
    {
      data.map((json, index) => (
        <li key={index}>
          <RowItem {...json}/>
        </li>
      ))
    }
  </ul>
)
