import React, { useState } from 'react';
import { TextField, Grid, Container, Typography } from '@mui/material';
import countWordsAndCharacters from '../util/parseText';
import { useDiffEntryContext } from '../contextProviders/DiffEntryContext';

const DiffEntry: React.FC = () => {
    const [textA, setTextA] = useState<string>('');
    const [textB, setTextB] = useState<string>('');

    const [characterCountA, setCharacterCountA] = useState<Number>(0);
    const [characterCountB, setCharacterCountB] = useState<Number>(0);
    const [wordCountA, setWordCountA] = useState<Number>(0);
    const [wordCountB, setWordCountB] = useState<Number>(0);

    // Use the shared context hook to update the variables in the shared context
    const { setSharedTextA, setSharedTextB } = useDiffEntryContext();

    return (
        <>
            <Container maxWidth="xl" style={{ margin: '20px auto' }}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            {/* We store the word count and character count as numbers, but need to convert them to strings here */}
                            Word Count: {wordCountA.toString()}, Character Count:
                            {characterCountA.toString()}
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            label="Enter text here..."
                            fullWidth
                            multiline
                            onChange={(event) => {
                                const [words, characters] = countWordsAndCharacters(
                                    event.target.value
                                );

                                setWordCountA(words);
                                setCharacterCountA(characters);
                                setTextA(event.target.value);
                                setSharedTextA(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            Word Count: {wordCountB.toString()}, Character Count:
                            {characterCountB.toString()}
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            label="Compare with..."
                            fullWidth
                            multiline
                            onChange={(event) => {
                                const [words, characters] = countWordsAndCharacters(
                                    event.target.value
                                );

                                setWordCountB(words);
                                setCharacterCountB(characters);
                                setTextB(event.target.value);
                                setSharedTextB(event.target.value);
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default DiffEntry;
