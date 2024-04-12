import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import FacebookIcon from '@mui/icons-material/Facebook';


const actions = [

    {
        icon: <WhatsAppIcon onClick={() => window.open('https://api.whatsapp.com/send?phone=970746661')}>


        </WhatsAppIcon>, name: 'WhatsApp'
    },


    {
        icon: <LinkedInIcon onClick={() => window.open('https://www.Linkedin.com')}>


        </LinkedInIcon>, name: 'Linkedin'
    },

    {
        icon: <FacebookIcon onClick={() => window.open('https://www.facebook.com/edwinfreddy.salvadorpomalaza')}>


        </FacebookIcon>, name: 'Facebook'
    },



];

export default function ControlledOpenSpeedDial() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}