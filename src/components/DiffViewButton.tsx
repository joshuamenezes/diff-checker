import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useDiffEntryContext } from '../contextProviders/DiffEntryContext';
import getDiff from '../util/computeDiff';

const DiffViewButton: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const { sharedTextA, sharedTextB } = useDiffEntryContext();
    const diff = getDiff(sharedTextA, sharedTextB);
    return (
        <>
            <Button onClick={() => setModalIsOpen(true)} variant="contained" color="secondary">
                View Diff
            </Button>
            <Dialog open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <DialogTitle>How To Use Diff Checker</DialogTitle>
                <DialogContent>
                    <p>{diff}</p>
                </DialogContent>
                <Button
                    onClick={() => setModalIsOpen(!modalIsOpen)}
                    variant="contained"
                    color="secondary"
                >
                    Close
                </Button>
            </Dialog>
        </>
    );
};

export default DiffViewButton;
