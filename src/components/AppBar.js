import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Divider, { dividerClasses } from '@mui/material/Divider';

const pages = ['About', 'Books', 'Watches', 'History', 'Philosophy', 'Science', 'Mathematics', 'Tech', 'AI', 'Chatterbug'];

export default function ApplicationBar() {
    const navigate = useNavigate();

    const handleCloseNavMenu = (event, page) => {
        console.log(page)
        if (page == "Chatterbug") {
            navigate("/chatterbug")
        } else if (page == "AI") {
            navigate("/ai")
        } else if (page == "Tech") {
            navigate("/tech")
        } else if (page == "Mathematics") {
            navigate("/maths")
        } else if (page == "Science") {
            navigate("/science")
        } else if (page == "Philosophy") {
            navigate("/philosophy")
        } else if (page == "History") {
            navigate("/history")
        } else if (page == "Watches") {
            navigate("/watches")
        } else if (page == "Books") {
            navigate("/books")
        } else if (page == "About") {
            navigate("/about")
        }

    };

    const handleMenu = (event) => {
        alert("Login")
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#353E47" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            flexGrow: 1,
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'broadway',
                            fontSize: 25,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Maitreya
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'row-reverse' }}>
                        {pages.map((page) => (
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Button
                                    key={page}
                                    onClick={(evt) => handleCloseNavMenu(evt, page)}
                                    sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'broadway' }}
                                >
                                    {page}
                                </Button>
                                <Box sx={{ height: '30%', alignSelf: 'center', borderLeft: 1, borderColor: 'white', borderWidth: '1px' }}></Box>
                            </Box>
                        ))}
                    </Box>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}