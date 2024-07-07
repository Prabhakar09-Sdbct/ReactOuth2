import Stack from '@mui/material/Stack';
import React from 'react';
import CustomTable from './common/CustomTable.js';

export default function Home({ mode }) {
    
    return (
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>

            <CustomTable mode={mode} />
        </Stack>
    );
}