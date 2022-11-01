import React from 'react'
import './Contact.css';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';



const Contact = () => {


    return (
        <div className="main-container-contact-us">
            <div className="main-text-contact col-12 text-center">
                <hr />
                <h1 className="text-contact">Contact Us</h1>
                <hr />
            </div>
            <div className="main-container-contact-us">
                <form noValidate autoComplete="off">
                    <Stack spacing={2}>
                        <TextField
                            required
                            label="Fist Name"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            required
                            label="Last name"
                            fullWidth
                        />

                        <TextField
                            required
                            label="Date of Birth"
                            fullWidth
                        />
                        <TextField
                            required
                            label="Message"
                            multiline
                            rows={5}
                            fullWidth
                        />

                        <Button className="buttonSendIcon" variant="contained" endIcon={<SendIcon />}>

                            Send
                        </Button>
                    </Stack>
                </form>
            </div>
        </div>
    )


}

export default Contact