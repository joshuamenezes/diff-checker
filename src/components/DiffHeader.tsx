import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Tooltip, Dialog, DialogTitle, DialogContent } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const DiffHeader: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpen = () => {
        setModalIsOpen(true);
    };

    const handleClose = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Diff Checker
                        </Typography>
                        <Tooltip title="More Information">
                            <IconButton color="secondary" aria-label="info" onClick={handleOpen}>
                                <InfoIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Dialog open={modalIsOpen} onClose={handleClose}>
                            <DialogTitle>How To Use Diff Checker</DialogTitle>
                            <DialogContent>
                                <p>
                                    To use the diff checker, you need two pieces of text. Place them
                                    in each of the input fields. The diff checker will analyze all
                                    differences between both pieces of text and highlight any
                                    differences it finds.
                                </p>
                                <Button onClick={handleClose} variant="contained" color="secondary">
                                    Close
                                </Button>
                            </DialogContent>
                        </Dialog>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default DiffHeader;
