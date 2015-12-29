import React from 'react';

export const List = ({data, RowItem}) => (
  <ul>
    {
      data.map((json, index) => (
        <li key={index}>
          <RowItem index={index} {...json} />
        </li>
      ))
    }
  </ul>
)
