'use client';
import React, { useState, useEffect } from 'react';
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
import {usePathname, useRouter} from "next/navigation";
import { Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function Navigation() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false); // State to track if scrolled
    const router = useRouter();
    const path = usePathname();

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

    // Scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <AppBar
                position={(!scrolled && path ==='/') ?  "static" :"fixed" }
                sx={{
                    backgroundColor: (scrolled || path ==='/') ? 'white' : 'transparent',
                    color: (scrolled || path ==='/') ? '#000' : '#fff',
                    borderBottom: '1px solid #ddd',
                    padding: '10px 10px',
                    boxShadow: (scrolled || path ==='/') ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
                    top: (scrolled || path ==='/') ? '0' : '10px',
                    transition: 'all 0.3s ease',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box onClick={() => router.push('/')} passHref>
                            <Image
                                src={img1}
                                alt="Logo"
                                style={{ width: '170px', height: '90px', objectFit: 'contain' }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '15px', marginLeft: '20px' }}>
                            {navItems.map(({ name, route }) => (
                                <Box key={name}>
                                    <Button
                                        sx={{
                                            textTransform: 'capitalize',
                                            color: (scrolled || path === '/') ? '#000' : '#fff', // Update color on scroll
                                            cursor: 'pointer',
                                            transition: '0.5s',
                                            fontSize: 15,
                                            ':hover': { backgroundColor: 'unset', textDecoration: 'underline' },
                                        }}
                                        onClick={() => router.push(route)}
                                    >
                                        {name}
                                    </Button>
                                </Box>
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
                                borderColor: (scrolled || path === '/') ? '#000' : '#fff', // Border color change on scroll
                                color: (scrolled || path === '/') ? '#000' : '#fff', // Text color change on scroll
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
                                    color: (scrolled || path === '/') ? '#000' : "#fff" // Change text color when scrolled
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
                                color: (scrolled || path === '/') ? '#000' : '#fff', // Icon color change on scroll
                                display: { lg: 'flex', xs: 'none' },
                                ':hover': { backgroundColor: '#000', color: '#fff' },
                            }}
                        >
                            <SearchIcon style={{ fontSize: '26px' }} />
                        </IconButton>

                        <IconButton
                            sx={{
                                border: '1px solid #8E8E8EFF',
                                color: (scrolled || path === '/') ? '#000' : '#fff', // Icon color change on scroll
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
