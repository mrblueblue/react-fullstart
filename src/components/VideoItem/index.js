import React from 'react';
import { Link } from 'react-router';

export const VideoItem = ({title, id}) => (
  <div>
    <Link to={`video/${id}`}>
    {title}
    </Link>
  </div>
)
