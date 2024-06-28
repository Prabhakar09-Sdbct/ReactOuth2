import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import authService from '../services/auth.service';
import CustomTable from './common/CustomTable.js';

export default function Home({ mode }) {

    const [user, setUser] = useState('');

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        if (currentUser) {
            setUser(currentUser.loginId);
        } else {

        }
    }, []);

    return (
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>

            <CustomTable mode={mode} />
        </Stack>
    );
}