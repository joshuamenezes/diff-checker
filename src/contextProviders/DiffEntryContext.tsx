import React, { createContext, useContext, useState } from 'react';

interface DiffEntryContextType {
    sharedTextA: string;
    sharedTextB: string;
    setSharedTextA: (value: string) => void; // Function to set textA
    setSharedTextB: (value: string) => void; // Function to set textB
}

// Define a context to share across components
const DiffEntryContext = createContext<DiffEntryContextType | undefined>(undefined);

export const useDiffEntryContext = () => {
    const context = useContext(DiffEntryContext);
    if (!context) {
        throw new Error('useDiffEntryContext must be used within a DiffEntryProvider');
    }
    return context;
};

// An interface to stop ts from complaining about the children nodes around the wrapper
interface DiffEntryProviderProps {
    children: React.ReactNode;
}

// Create the actual provider, assign variables and setters according to the interface and return the provider wrapper
export const DiffEntryProvider: React.FC<DiffEntryProviderProps> = ({ children }) => {
    const [sharedTextA, setSharedTextA] = useState('');
    const [sharedTextB, setSharedTextB] = useState('');

    return (
        <DiffEntryContext.Provider
            value={{ sharedTextA, sharedTextB, setSharedTextA, setSharedTextB }}
        >
            {children}
        </DiffEntryContext.Provider>
    );
};
