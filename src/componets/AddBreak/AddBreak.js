import React from 'react';
import './AddBreak.css'

const AddBreak = ({ setBreakTime, handleAddtoBreak }) => {
    return (
        <div className='btn-group'>
            <button onClick={() => handleAddtoBreak(setBreakTime(10))}>10s</button>
            <button onClick={() => handleAddtoBreak(setBreakTime(20))}>20s</button>
            <button onClick={() => handleAddtoBreak(setBreakTime(30))}>30s</button>
            <button onClick={() => handleAddtoBreak(setBreakTime(40))}>40s</button>
            <button onClick={() => handleAddtoBreak(setBreakTime(50))}>50s</button>
        </div>
    );
};

export default AddBreak;