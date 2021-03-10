import React from 'react';
import { Button } from 'react-bootstrap-buttons';

export default function Buttons({ GoToNextPage, GoToPrevPage }) {
    const footer = {
        position: 'fixed',
        margin: 'auto',
        textAlign: 'center',
        bottom: '20px',
        width: '100%'
    }
    return (
        <div style={footer}>
            <Button variant="primary" onClick={GoToPrevPage}>Previous page</Button>
            <Button variant="primary" onClick={GoToNextPage}>Next page</Button>
        </div>
    )
}