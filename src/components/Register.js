
import React from 'react'
import '../assets/register.css'
import { Container, Paper, Grid, TextField, FormControlLabel, Checkbox, Button, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';


function Signup(){
    return(
        <Container maxWidth="md" className="registration">
            <Paper elevation={3}>
            <Grid container spacing={3}>
                    <Grid item xs={6}>
                        Image
                    </Grid>
                    <Grid item xs={6}>
                        <div className="register">
                            <Typography variant="h6" color="primary" align="center">
                                <Box mb={2}>
                                    REGISTER
                                </Box>
                            </Typography>

                            <form>
                                <Grid item xs={12}>
                                    <Box mb={3}>
                                        <TextField label="Full Name" variant="filled" fullWidth />
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box mb={3}>
                                        <TextField label="Email" variant="filled" fullWidth />
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box mb={3}>
                                        <FormControl fullWidth>
                                            <InputLabel id="experience">Level of experience</InputLabel>
                                            <Select labelId="experience">
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box mb={1}>
                                        <TextField label="Password" variant="filled" fullWidth />
                                    </Box>
                                </Grid>

                               <Grid item xs={12}>
                                    <Box mb={1} className="terms-and-conditions">
                                        <FormControlLabel 
                                            control={<Checkbox color="primary" />} 
                                            label= "Accept"
                                            style={{marginRight: 0}}
                                        />
                                        <Button href="#" color="primary">
                                            Terms and Conditions
                                        </Button>
                                    </Box>
                               </Grid>

                               <Grid item xs={12}>
                                    <Box mb={1}>
                                        <Button variant="contained" color="primary" fullWidth>SIGN UP</Button>
                                    </Box>
                               </Grid> 

                               <Grid item xs={12} style={{textAlign: 'center'}}>
                                    <label>Already have an account?</label>  
                                    <Button href="#" color="primary">
                                        LOG IN 
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

export default Signup;