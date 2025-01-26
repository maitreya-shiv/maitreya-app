import React from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';


const userMessageBox = (
    <Box
        sx={{
            width: '60%',
            height: 150,
            borderRadius: 2,
            bgcolor: '#e4e8ec',
            marginTop: '40px',
            marginBottom: '40px',
            marginLeft: '40px',
            borderRight: '5px solid #1790A6',
            fontSize: '42px',
            padding: '20px',
            color: '#353E47',
            fontFamily: 'broadway',
            boxShadow: '3px 3px 3px #e4e8ec'
        }}
    >
        Answer to the Ultimate Question of Life, The Universe, and Everything.
    </Box>
);

const aiMessageBox = (
    <Box
        sx={{
            width: '60%',
            height: 100,
            borderRadius: 2,
            bgcolor: '#e4e8ec',
            marginRight: '40px',
            borderLeft: '5px solid #F3AC2B',
            fontSize: '42px',
            padding: '20px',
            fontFamily: 'broadway',
            color: '#353E47',
            boxShadow: '3px 3px 3px #e4e8ec'
        }}
    >
        42
    </Box>
);

export default function Home() {
    const containerRefUser = React.useRef(null);
    const containerRefAI = React.useRef(null);
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'left'
                }}
                ref={containerRefUser}
            >
                <Slide in={true} appear={true} direction="right" timeout={500} container={containerRefUser.current}>
                    {userMessageBox}
                </Slide>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'right'
                }}
                ref={containerRefAI}
            >
                <Slide in={true} appear={true} direction="left" timeout={500} container={containerRefAI.current}>
                    {aiMessageBox}
                </Slide>
            </Box>
        </Box>
    );
}
