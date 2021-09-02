import React from 'react'
import '../assets/login.css';
import { Container, Paper, Grid, TextField, FormControlLabel,Checkbox, Button, Box, Typography } from '@material-ui/core';

function Login(){
    return(
        <Container maxWidth="md" className="main-area">
            <Paper elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        Image
                    </Grid>
                    <Grid item xs={6}>
                        <div className="login">
                            <Typography variant="h6" color="primary" align="center">
                                <Box mb={2}>
                                    SIGN IN
                                </Box>
                            </Typography>

                            <form className="signin">
                                <Grid item xs={12}>
                                    <Box mb={3}>
                                        <TextField label="Email" variant="filled" fullWidth />
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box mb={1}>
                                        <TextField label="Password" variant="filled" fullWidth />
                                    </Box>
                                </Grid>

                               <Grid item xs={12}>
                                    <Box mb={1} className="remember-forget">
                                        <FormControlLabel control={<Checkbox name="checkedC" color="primary" />} label= "Remember Me" />
                                        <Button href="#" color="primary">
                                            Forgot Password?
                                        </Button>
                                    </Box>
                               </Grid>

                               <Grid item xs={12}>
                                    <Box mb={1}>
                                        <Button variant="contained" color="primary" fullWidth>LOG IN</Button>
                                    </Box>
                               </Grid> 

                               <Grid item xs={12} style={{textAlign: 'center'}}>
                                    <label>Don’t have an account?</label>  
                                    <Button href="#" color="primary">
                                        Register Now 
                                    </Button>
                               </Grid>
                            </form>
                        </div>
                        
                    </Grid>
                </Grid>   
            </Paper>
        </Container>
    );
}

export default Login;