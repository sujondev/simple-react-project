import React, { useEffect } from 'react';
import './AddBreak.css'

const AddBreak = ({ setBreakTime }) => {

    return (
        <div className='btn-group'>
            <button onClick={() => {
                setBreakTime(20)
                localStorage.setItem("breakTime", JSON.stringify(20));
                // console.log(typeof localStorage.getItem("breakTime"));
            }}>20s</button>
            <button onClick={() => setBreakTime(30)}>30s</button>
            <button onClick={() => setBreakTime(40)}>40s</button>
            <button onClick={() => setBreakTime(50)}>50s</button>
            <button onClick={() => setBreakTime(60)}>60s</button>
        </div>
    );
};

export default AddBreak;