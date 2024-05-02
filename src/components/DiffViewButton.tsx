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
            <Dialog open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <DialogTitle>How To Use Diff Checker</DialogTitle>
                <DialogContent>
                    <p>{diff}</p>
                    <Button
                        onClick={() => setModalIsOpen(!modalIsOpen)}
                        variant="contained"
                        color="secondary"
                    >
                        View Diff
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DiffViewButton;
