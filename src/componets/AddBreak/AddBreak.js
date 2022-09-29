import React, { useEffect } from 'react';
import './AddBreak.css'

const AddBreak = ({ setBreakTime }) => {
    useEffect(() => {
        const localStorageGet = localStorage.getItem("breakTime")
        if (localStorageGet) {
            setBreakTime(localStorageGet)
        }
    }, [])

    return (
        <div className='btn-group'>
            <button onClick={() => {
                setBreakTime(20)
                localStorage.setItem("breakTime", JSON.stringify(20));
            }}>20s</button>
            <button onClick={() => {
                setBreakTime(30)
                localStorage.setItem("breakTime", JSON.stringify(30));
            }}>30s</button>
            <button onClick={() => {
                localStorage.setItem("breakTime", JSON.stringify(40));
                setBreakTime(40)
            }}>40s</button>
            <button onClick={() => {
                localStorage.setItem("breakTime", JSON.stringify(50));
                setBreakTime(50)
            }}>50s</button>
            <button onClick={() => {
                localStorage.setItem("breakTime", JSON.stringify(60));
                setBreakTime(60)
            }}>60s</button>
        </div>
    );
};

export default AddBreak;