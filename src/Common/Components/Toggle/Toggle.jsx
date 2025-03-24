import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "@fontsource/bebas-neue";

export default function Toggle() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
            }}
        >
            <ToggleButton
                sx={{
                    minWidth: '117px',
                    fontFamily: 'bebas neue',
                    fontSize: '22px',
                    lineHeight:'100%',
                    color:'black',
                    '&.MuiToggleButton-root': {
                        border: '1px solid #F2BA1D',
                        borderRadius: '27.5px 0 0 27.5px',
                        marginRight: '10px',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#F2BA1D',
                        color: 'white', // Change text color when selected
                    },
                    '&:hover': {
                        backgroundColor: '#F2BA1D',
                        color: 'white', // Change text color when hovered
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: '#F2BA1D',
                        color: 'white', // Change text color when selected and hovered
                    },
                }} value="web">Login</ToggleButton>
            <ToggleButton
                sx={{
                    minWidth: '117px',
                    fontFamily: 'bebas neue',
                    fontSize: '22px',
                    color:'black',
                    '&.MuiToggleButton-root': {
                        border: '1px solid #F2BA1D',
                        borderRadius: '0 27.5px 27.5px 0',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#F2BA1D',
                        color: 'white', // Change text color when selected
                    },
                    '&:hover': {
                        backgroundColor: '#F2BA1D',
                        color: 'white', // Change text color when hovered
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: '#F2BA1D',
                        color: 'white', // Change text color when selected and hovered
                    },
                }} value="ios">Register</ToggleButton>
        </ToggleButtonGroup>
    );
}
