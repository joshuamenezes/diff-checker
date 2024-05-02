import React from 'react';
import './App.css';
import DiffEntry from './components/DiffEntry';
import DiffHeader from './components/DiffHeader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import DiffViewButton from './components/DiffViewButton';
import { DiffEntryProvider } from './contextProviders/DiffEntryContext';

// Global theme for the application, injected with themeprovider
// TODO: make the colors more readable
const theme = createTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#66bb6a'
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <DiffEntryProvider>
                    <DiffHeader />
                    <DiffEntry />
                    <DiffViewButton />
                </DiffEntryProvider>
            </div>
        </ThemeProvider>
    );
}

export default App;
