import React, { useEffect, useState } from 'react';
import AddBreak from '../AddBreak/AddBreak';
import Card from '../Card/Card';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [cards, setCards] = useState([])
    const [time, setTime] = useState(0)
    const [breakTime, setBreakTime] = useState(0)
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])

    const handleAddTolist = (times) => {
        const newTime = parseInt(times)
        const totalTime = time + newTime;
        setTime(totalTime)
    }

    const notify = () =>
        toast.success("congratulations we are done!", { position: "top-center", autoClose: 3000 })




    return (
        <div className='home-container'>
            <div className='my-gym-info'>
                {
                    cards.map(card => <Card card={card} key={card.id} handleAddTolist={handleAddTolist}></Card>)

                }
            </div>

            <div className='my-profile-info'>
                <div className='my-info'>
                    <h3>Shahidul Islam</h3>
                    <p><small>Chitagong,Bangladesh</small></p>
                </div>
                <h3>Add A Break</h3>
                <AddBreak setBreakTime={setBreakTime}></AddBreak>
                <div className='time-details'>
                    <h3>Exrise Details</h3>
                    <h4>Exercise time: {time} seconds</h4>
                    <h4>Break time: {breakTime} seconds</h4>
                </div>
                <button className='activity-btn' onClick={() => notify()}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};


export default Home;