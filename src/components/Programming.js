import React from 'react';
import Box from '@mui/material/Box';
import BlogItem from './BlogItem';
import devInPython from './contents/devInPython';
import installCUDA from './contents/installCUDA';
import installUnsloth from './contents/installUnsloth';
import installLlamaCpp from './contents/installLlamaCpp';



export default function Programming() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '90%',
                overflow: "scroll",
                padding: '10px'
            }}
        >
            {BlogItem(devInPython)}
            {BlogItem(installCUDA)}
            {BlogItem(installUnsloth)}
            {BlogItem(installLlamaCpp)}
        </Box>
    );
}