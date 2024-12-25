'use client';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '../../assets/images/navigation/logo.png';
import EastIcon from '@mui/icons-material/East';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import { useRouter } from "next/navigation";
import { Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function Navigation() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const navItems = [
        { name: 'Home', route: '/' },
        { name: 'Pages', route: '/pages' },
        { name: 'About', route: '/about' },
        { name: 'Services', route: '/services' },
        { name: 'Case', route: '/case' },
        { name: 'Blog', route: '/blog' },
        { name: 'Contact', route: '/contact' },
    ];

    return (
        <>
            {/* AppBar */}
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'transparent',
                    color: '#000',
                    borderBottom: '1px solid #ddd',
                    padding: '10px 10px',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link href="/" passHref>
                            <Image
                                src={img1}
                                alt="Logo"
                                style={{ width: '170px', height: '90px', objectFit: 'contain' }}
                            />
                        </Link>
                    </Box>

                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '15px', marginLeft: '20px' }}>
                            {navItems.map(({ name, route }) => (
                                <Link key={name} href={route} passHref>
                                    <Button
                                        sx={{
                                            textTransform: 'capitalize',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            transition: '0.5s',
                                            fontSize: 15,
                                            ':hover': { backgroundColor: 'unset', textDecoration: 'underline' },
                                        }}
                                    >
                                        {name}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ display: { lg: 'flex', xs: 'none' } }}>
                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: 'capitalize',
                                borderRadius: '30px',
                                padding: '12px 30px',
                                borderColor: '#fff',
                                color: '#fff',
                                textWrap: 'nowrap',
                                ':hover': { backgroundColor: '#000', color: '#fff' },
                            }}
                        >
                            Plan With Us
                            <Box sx={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                                <EastIcon />
                            </Box>
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                                sx={{
                                    display: { lg: 'flex', xs: 'none' },
                                    alignItems: 'center',
                                    mr: 2,
                                    background: '#000',
                                    color: '#fff',
                                    p: 2.2,
                                    borderRadius: '50%',
                                }}
                            >
                                <PhoneCallbackIcon style={{ fontSize: '28px' }} />
                            </Box>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: '500',
                                    fontSize: '18px',
                                    display: { xl: 'flex', xs: 'none' },
                                    alignItems: 'center',
                                    color:"#fff"
                                }}
                            >
                                24/7 Support: (234) 109-6666
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <IconButton
                            sx={{
                                border: '1px solid #8E8E8EFF',
                                color: '#fff',
                                display: { lg: 'flex', xs: 'none' },
                                ':hover': { backgroundColor: '#000', color: '#fff' },
                            }}
                        >
                            <SearchIcon style={{ fontSize: '26px' }} />
                        </IconButton>

                        <IconButton
                            sx={{
                                border: '1px solid #8E8E8EFF',
                                color: '#fff',
                                display: { lg: 'flex', xs: 'flex' },
                                ':hover': { backgroundColor: '#000', color: '#fff' },
                            }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon style={{ fontSize: '26px' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        width: 300,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '40px 35px',
                        gap: '20px',
                        position: 'relative',
                    }}
                    role="presentation"
                    onKeyDown={toggleDrawer(false)}
                >
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: '#000',
                            color: '#fff',
                            ':hover': { backgroundColor: '#333' },
                        }}
                        onClick={toggleDrawer(false)}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Link href="/" passHref>
                        <Image
                            src={img1}
                            alt="Logo"
                            style={{
                                width: '150px',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </Link>

                    <List>
                        {navItems.map(({ name, route }) => (
                            <ListItem key={name} disablePadding>
                                <Link href={route} passHref>
                                    <ListItemButton component="a">
                                        <ListItemText primary={name} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Navigation;
