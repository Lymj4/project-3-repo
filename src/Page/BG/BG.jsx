import { Box } from "@mui/material";
import bgImage from "../../assets/backgroundImage.png"

export default function BG(props) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
                position:'relative',
                display:'flex',
                alignItems:'center',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    height:'100%',
                    width:'100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    position:'absolute',
                    opacity:'0.5',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                </Box>
                <Box sx={{
                        width:'60%',
                        height:'80%',
                        backgroundColor:'transparent',
                        zIndex:1
                    }}>
                        {props.children}
                    </Box>
        </Box>
    )
}