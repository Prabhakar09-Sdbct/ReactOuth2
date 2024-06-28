import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './loader.css';

export default function Loader() {
  return (
    <div className='loaderContainer'>
      <CircularProgress />
    </div>
  );
}