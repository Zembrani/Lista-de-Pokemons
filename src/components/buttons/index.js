import React from 'react';
import { Button } from 'react-bootstrap-buttons';

export default function Buttons({ GoToNextPage, GoToPrevPage }) {
    return (
        <div style={{ margin : 'auto', textAlign : 'center'}}>
            <Button variant="primary" onClick={GoToPrevPage}>Previous page</Button>
            <Button variant="primary" onClick={GoToNextPage}>Next page</Button>
        </div>
    )
}