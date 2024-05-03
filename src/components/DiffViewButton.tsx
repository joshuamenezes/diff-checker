import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useDiffEntryContext } from '../contextProviders/DiffEntryContext';
import { diffChars } from 'diff';

const DiffViewButton: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [diffView, setDiffView] = useState<JSX.Element[]>([]);

    const { sharedTextA, sharedTextB } = useDiffEntryContext();

    // Recalculate diff whenever sharedTextA or sharedTextB changes
    // https://www.npmjs.com/package/diff
    useEffect(() => {
        const diff = diffChars(sharedTextA, sharedTextB);

        const formattedDiff = diff.map((part, index) => {
            // Nested ternery ass ... basically assign colors by checking if a character was added, removed, or stayed the same
            const color = part.added ? 'green' : part.removed ? 'red' : 'grey';

            return (
                <span key={index} style={{ color }}>
                    {part.value}
                </span>
            );
        });

        setDiffView(formattedDiff);
    }, [sharedTextA, sharedTextB]);

    return (
        <>
            <Button onClick={() => setModalIsOpen(true)} variant="contained" color="secondary">
                View Diff
            </Button>
            <Dialog
                open={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                maxWidth="xl"
                fullWidth
            >
                <DialogTitle>Diff</DialogTitle>
                <DialogContent>
                    {diffView.length === 0 ? 'No differences found' : diffView}
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
