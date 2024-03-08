import React from 'react';
import {
    Box,
    Button,
    CardMedia,
    FormControl,
    Grid, IconButton, InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField, Typography
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import background from '../../assets/image/orange-background.jpeg';
import logo from '../../assets/icon/orange-logo.png';
import {Link} from "react-router-dom";

function SignIn() {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box>
                <Grid container style={{height: "100vh"}}>
                    <Grid display={{xs: 'none', sm: 'block', md: 'block', lg: 'block', lx: 'block'}} item xs={0} sm={6} md={6} lg={8} xl={8}
                          style={{ backgroundColor: "orange" }}>
                        <CardMedia component="img" height="100%" image={background} alt="background"/>
                    </Grid>
                    <Grid container xs={12} sm={6} md={6} lg={4} xl={4}
                          style={{
                              display: "flex",
                              placeContent: "flex-start center",
                              justifyContent: "center",
                              flexDirection: "column",
                              alignItems: "flex-end",
                              flexWrap: "nowrap"
                    }}>
                        <Grid item
                              style={{
                                  width: "100%",
                                  height: "100px",
                                  paddingLeft: "40px",
                                  paddingRight: "40px",
                                  display: 'flex',
                                  alignItems: 'flex-end',
                                  justifyContent: 'center',
                                  marginTop: "100px",
                                  paddingBottom: '190px'
                        }}>
                            <CardMedia component="img" image={logo} alt="logo"
                                       style={{ width: 60 }}
                            />
                        </Grid>
                        <Grid item
                              style={{
                                  width: "100%",
                                  paddingLeft: "40px",
                                  paddingRight: "40px",
                                  paddingBottom: "20px"
                        }}>
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
                                       InputLabelProps={{ style: { color: '#ff8f04' }}}
                                       inputProps={{ style: { color: '#ff8f04' }}}
                            />
                        </Grid>
                        <Grid item
                              style={{
                                  width: "100%",
                                  paddingLeft: "40px",
                                  paddingRight: "40px",
                                  paddingBottom: "10px",
                        }}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password"
                                            style={{ color: "#ff8f04" }}
                                >Password</InputLabel>
                                <OutlinedInput
                                    style={{color: "#ff8f04"}}
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                style={{ color: '#ff8f04' }}
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item
                              style={{
                                  paddingLeft: "40px",
                                  paddingRight: "40px",
                                  paddingBottom: "20px"
                        }}>
                            <Typography
                                style={{
                                    color: '#898401',
                                    fontSize: '14px',
                                    paddingBottom: '30px',
                                    height: 'auto',
                                    cursor: 'pointer'
                                }}
                            >Forgot Password?</Typography>
                        </Grid>
                        <Grid item
                              style={{
                                  width: "100%",
                                  paddingLeft: "40px",
                                  paddingRight: "40px"
                        }}>
                            <Button variant="contained" size="large" fullWidth
                                    style={{
                                        borderRadius: "10px",
                                        backgroundColor: "#ff8f04",
                                        padding: "14px",
                                        fontSize: "14px",
                                    }}
                            >SignIn</Button>
                        </Grid>
                        <Grid item
                              style={{
                                  width: "100%",
                                  paddingLeft: "40px",
                                  paddingRight: "40px",
                                  paddingTop: "60px",
                                  display: 'flex',
                                  alignItems: 'flex-end',
                                  justifyContent: 'center',
                              }}>
                            <Typography
                                style={{
                                    color: '#605900',
                                    fontSize: '14px',
                                    paddingBottom: '30px',
                                    height: 'auto',
                                    display: 'flex'
                                }}
                            >Not account yet?
                                <Link to="/signup"
                                      style={{
                                          color: '#8f8f02',
                                          fontSize: '14px',
                                          paddingLeft: '6px',
                                          cursor: 'pointer'
                                }}
                                >Sign Up</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default SignIn;