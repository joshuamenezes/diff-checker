import React from 'react';
import { render, screen } from '@testing-library/react';
import DiffEntry from '../../components/DiffEntry';
import { DiffEntryContext } from '../../contextProviders/DiffEntryContext';

// Mock the context provider with mock context values
const mockContextValue = {
    sharedTextA: 'Mock Text A',
    sharedTextB: 'Mock Text B',
    setSharedTextA: jest.fn(),
    setSharedTextB: jest.fn()
};
test('renders DiffEntry component with context provider', () => {
    render(
        <DiffEntryContext.Provider value={mockContextValue}>
            <DiffEntry />
        </DiffEntryContext.Provider>
    );

    expect(document.getElementById('textA')).toBeInTheDocument();
    expect(document.getElementById('textB')).toBeInTheDocument();
});
