'use client';
import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Button,
    Stack,
    Container,
    Drawer, Grid,
} from '@mui/material';
import logo from '../../assets/images/logo/Png-02.png';
import logo2 from '../../assets/images/logo/logo-white.png';
import {Menu as MenuIcon, Phone, Email, Facebook, Instagram, LinkedIn, Twitter, Close} from '@mui/icons-material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useRouter} from "next/navigation";

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    const pages = [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Portfolio', route: '/portfolio' },
        { name: 'Clients', route: '/clients' },
        { name: 'Blog', route: '/blog' },
        { name: 'Contact', route: '/contact' },
    ];

    const handleNavigation = (route) => {
        setDrawerOpen(false);
        router.push(route);
    };
    return (
        <>
            <Grid container sx={{height: '15px'}}>
                <Grid item xs={4} sx={{backgroundColor: 'crimson'}}/>
                <Grid item xs={4} sx={{backgroundColor: 'eggPlant'}}/>
                <Grid item xs={4} sx={{backgroundColor: 'springGreen'}}/>
            </Grid>
            <Box sx={{backgroundColor: 'white', py: 1, mt: 3,display: {xs:'none',md:'block'}}}>
                <Container maxWidth="lg">
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row" spacing={2}>
                            <Typography
                                variant="body2"
                                sx={{display: 'flex', alignItems: 'center', color: 'darkGray'}}
                            >
                                <Phone sx={{mr: 0.6, fontSize: '18px', color: 'crimson'}}/>{' '}
                                <Typography component={'span'}
                                            sx={{letterSpacing: 0.5, fontSize: '14px', fontWeight: 600}}>
                                    +1 631 123 4567
                                </Typography>
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{display: 'flex', alignItems: 'center', color: 'darkGray'}}
                            >
                                <Email sx={{mr: 0.6, fontSize: '18px', color: 'crimson'}}/>
                                <Typography component={'span'}
                                            sx={{letterSpacing: 0.5, fontSize: '14px', fontWeight: 600}}>
                                    email@website.com
                                </Typography>
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} justifyContent={'left'} sx={{mr: {sm:10.,lg:5}}}>
                            <IconButton size="small" color="inherit">
                                <Facebook sx={{fontSize: '20px'}}/>
                            </IconButton>
                            <IconButton size="small" color="inherit">
                                <Twitter sx={{fontSize: '20px'}}/>
                            </IconButton>
                            <IconButton size="small" color="inherit">
                                <LinkedIn sx={{fontSize: '20px'}}/>
                            </IconButton>
                            <IconButton size="small" color="inherit">
                                <Instagram sx={{fontSize: '20px'}}/>
                            </IconButton>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'white',
                    position: 'relative',
                    color: 'black',
                    boxShadow: 'none',
                    py: 1,
                    overflow: 'unset',
                    mb: 5
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            component="div"
                            className="oswald"
                            sx={{
                                flexGrow: 1,
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                color: 'black',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    position: 'absolute',
                                    bottom: -90,
                                    zIndex: 2,
                                    backgroundColor: 'black',
                                    px: 1,
                                    py: 0.5,
                                    height: 130,
                                }}
                            >
                                <Image src={logo} alt={logo} style={{width: '100%', height: '100%'}}/>
                            </Box>
                        </Typography>

                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            {pages.map(({ name, route }) => (
                                <Button
                                    key={name}
                                    onClick={() => handleNavigation(route)}
                                    sx={{ color: 'black', textTransform: 'unset', fontSize: '18px' }}
                                >
                                    {name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>

                <IconButton
                    color="inherit"
                    onClick={() => setDrawerOpen(true)}
                    sx={{
                        position: 'absolute',
                        right: 50,
                        top: { xs: '50%', md: '-60%' ,lg: '-66%'},
                        zIndex: 2,
                    }}
                >
                    <MenuIcon sx={{ fontSize: '2rem', color: 'black' }} />
                </IconButton>
            </AppBar>

            <Drawer
                anchor="bottom"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        height: '100vh',
                        width: '100%',
                        backgroundColor: 'crimson',
                        color: 'white',
                        position: 'relative',
                    },
                }}
                transitionDuration={{enter: 500, exit: 500}}
            >
                <IconButton
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        color: 'white',
                        zIndex: 10,
                    }}
                >
                    <Close sx={{fontSize: '2rem'}}/>
                </IconButton>

                <Box
                    sx={{
                        height: '100%',
                    }}
                >
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4}}>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                height: 250,
                                width: 250
                            }}
                        >
                            <Image src={logo2} alt={logo2} style={{width: '100%', height: '100%'}}/>
                        </Typography>
                    </Box>
                    <Container>
                        <Grid container sx={{paddingBottom: 5,borderBottom: '1px solid #FFFFFF80'}}>
                            <Grid item xs={12} md={8}>
                                <Box sx={{textAlign: {xs:'center',md: 'left'},mb: {xs:5,md:0}}}>
                                    {pages.map(({ name, route }) => (
                                        <Typography
                                            key={name}
                                            className={'oswald'}
                                            sx={{
                                                mt: 1,
                                                fontSize: '36px',
                                                fontWeight: 'bold',
                                                display: 'block',
                                                textTransform: 'uppercase',
                                                color: 'white',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                            onClick={() => handleNavigation(route)}
                                        >
                                            {name}
                                        </Typography>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ display: 'flex',height: '100%', alignItems: 'center',justifyContent: {xs:'center',md: 'left'},textAlign: {xs:'center',md: "left"}}}>
                                    <Box>
                                        <Typography variant="body1" sx={{mb: 1}}>
                                            +1 631 123 4567
                                        </Typography>
                                        <Typography variant="body1" sx={{mb: 3}}>
                                            email@website.com
                                        </Typography>

                                        <Stack direction="row" spacing={2} justifyContent={{xs:'center',md: 'left'}}>
                                            <IconButton sx={{ color: 'white' }}>
                                                <FacebookIcon />
                                            </IconButton>
                                            <IconButton sx={{ color: 'white' }}>
                                                <TwitterIcon />
                                            </IconButton>
                                            <IconButton sx={{ color: 'white' }}>
                                                <YouTubeIcon />
                                            </IconButton>
                                            <IconButton sx={{ color: 'white' }}>
                                                <InstagramIcon />
                                            </IconButton>
                                        </Stack>
                                        <Typography variant="body2" sx={{mt: 2}}>
                                            © 2024 MegaOne. Made With Love by Themesindustry
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Drawer>
        </>
    );
}

export default Navbar;
