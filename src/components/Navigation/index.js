import React from 'react';
import { Link } from 'react-router';

export const Navigation = (props) => (
  <div className='navigation'>
    <p>I am the Navigation</p>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/video'}>Video</Link></li>
    </ul>
  </div>
)
