import React from 'react';
import { TextField, Grid, Container } from '@mui/material';

// FC indicates a functional component here
const DiffEntry: React.FC = () => {
    return (
        <>
            <Container maxWidth="xl" style={{ margin: '20px auto' }}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-basic"
                            label="Enter text here..."
                            fullWidth
                            multiline
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="outlined-basic"
                            label="Compare with..."
                            fullWidth
                            multiline
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default DiffEntry;
