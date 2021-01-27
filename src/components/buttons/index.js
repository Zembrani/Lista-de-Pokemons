import React from 'react';
import { Button } from 'react-bootstrap-buttons';


export default function Buttons({ GoToNextPage, GoToPrevPage }) {
    return (
        <>
            <Button variant="primary" onClick={GoToPrevPage}>Previous page</Button>{' '}        
            <Button variant="primary" onClick={GoToNextPage}>Next page</Button>{' '}
        </>
    )
}