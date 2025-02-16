import React from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import HomeCards from './HomeCards';


const userMessageBox = (
    <Box
        sx={{
            width: '60%',
            borderRadius: 2,
            bgcolor: '#e4e8ec',
            marginTop: '20px',
            marginBottom: '20px',
            marginLeft: '40px',
            borderRight: '5px solid #1790A6',
            fontSize: '2.5em',
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
            borderRadius: 2,
            bgcolor: '#e4e8ec',
            marginTop: '20px',
            marginBottom: '20px',
            marginRight: '40px',
            borderLeft: '5px solid #F3AC2B',
            fontSize: '3em',
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
                    flexDirection: 'column',
                    minHeight: '600px'
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'left',
                        flex: 1
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
                        justifyContent: 'right',
                        flex: 1
                    }}
                    ref={containerRefAI}
                >
                    <Slide in={true} appear={true} direction="left" timeout={500} container={containerRefAI.current}>
                        {aiMessageBox}
                    </Slide>
                </Box>

            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: '500px',
                    backgroundColor: '#2b2c2b'
                }}
            >
                <HomeCards></HomeCards>
            </Box>
        </Box>
    );
}
