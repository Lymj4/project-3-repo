import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography, FormControlLabel, Checkbox, ToggleButtonGroup, ToggleButton } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import GoogleIcon from '@mui/icons-material/Google';
// import instance from '../../Service/AxiosOrder';
import { Link, useNavigate } from 'react-router-dom';
import coverImage from "../../assets/backgroundImage.png";
import "@fontsource/bebas-neue";
import Toggle from '../../Common/Components/Toggle/Toggle';
import instance from '../../Service/AxiosOrder';



export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    
    const handleLogin = () => {
        instance.post('/login', {
            email: username,
            password: password
          })
          .then(function (response) {
            console.log(response)
            const token = response.data?.token;
            localStorage.setItem('token', token);
            // window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <Box
            display={'flex'}
            sx={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFFF',
                border: '3px solid white',
                borderRadius: '35px',
                flexDirection: 'row'
            }}
        >
            <Box sx={{
                flex: 1,
                background: `url(${coverImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                border: '2px solid white',
                borderTopLeftRadius: '35px',
                borderBottomLeftRadius: '35px'
            }}>

            </Box>
            <Box
                sx={{
                    flex: 1,
                    color: 'white',
                    height: '60%',
                    minWidth: '500px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '50px'
                }}
            >
                <Box>
                   <Toggle/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    marginLeft: '60px'
                }}>
                    <Box sx={{ color: 'black', fontFamily: 'bebas neue', fontWeight: '400', fontSize: '34px', lineHeight: '100%', letterSpacing: '0%' }}><h1>Welcome Back</h1> </Box>
                    <Box sx={{ color: 'black', fontFamily: 'bebas neue', fontWeight: 'bold', fontSize: '14px' }}><h1>ACPT INSTITUTE</h1> </Box>
                </Box>


                <Stack spacing={8} sx={{ width: 500 }}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Email"
                        multiline
                        maxRows={4}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: '#F6F6F6',
                                borderRadius: '10px',
                                '& fieldset': {
                                    borderColor: '#F6F6F6',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#F6F6F6',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#F6F6F6',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'black',
                            },
                            '& .MuiInputBase-input': {
                                color: 'black',
                                backgroundColor: '#F6F6F6'
                            },
                        }}
                    />
                    <FormControl sx={{
                        m: 1, width: '400', '& .MuiOutlinedInput-root': {
                            backgroundColor: '#F6F6F6',
                            borderRadius: '10px',
                            '& fieldset': {
                                borderColor: '#F6F6F6',
                            },
                            '&:hover fieldset': {
                                borderColor: '#F6F6F6',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#F6F6F6',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: 'black',
                            backgroundColor: '#F6F6F6'
                        },
                    }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" sx={{ color: 'black' }}>Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#F6F6F6',
                                    '& fieldset': {
                                        borderColor: 'black',
                                        backgroundColor: '#F6F6F6'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'black',
                                        backgroundColor: '#F6F6F6'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                        backgroundColor: '#F6F6F6'
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    color: 'black',
                                    backgroundColor: '#F6F6F6'
                                },
                            }}
                            endAdornment={
                                <InputAdornment position="end" sx={{
                                    backgroundColor: '#F6F6F6',
                                }}>
                                    <IconButton sx={{
                                        color: 'black',
                                        backgroundColor: '#F6F6F6',
                                    }}
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                </Stack>
                <Box
                    sx={{
                        display: 'flex',
                        height: '20%',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'end',
                        paddingRight: '80px'
                    }}>
                    <Button onClick={handleLogin} variant="contained" size="large" sx={{
                        backgroundColor: 'transparent',
                        color: '#0b194a',
                        fontFamily: 'bebas neue',
                        fontWeight: '700',
                        borderRadius: '27.5px',
                        border: '1px solid #F2BA1D',
                        minWidth: '107px',
                        fontSize: '22px'
                    }} >
                        Login
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

