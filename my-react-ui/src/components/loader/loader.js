import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import './loader.css';

export default function Loader() {
  return (
    <div className='loaderContainer'>
      <CircularProgress />
    </div>
  );
}