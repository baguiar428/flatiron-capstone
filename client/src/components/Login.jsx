import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Login({setLoginStatus}) {

    const theme = createTheme();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function goToSignup() {
        navigate('/signup')
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        const login = {
            ...formData
        }
        //console.log(`login: ${login}`)

        fetch('login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"               
            },
            body: JSON.stringify(login)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        sessionStorage.setItem('user_id', user.id)
                        console.log('Login Worked')
                        navigate('/')
                    })
                } else {
                    console.log('Login Failed')
                }
            })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            {/* //Code for Forgot Password Feature - TODO
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid> */}
                            <Grid item>
                                <Link onClick={goToSignup} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Login