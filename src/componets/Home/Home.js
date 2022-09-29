import React, { useEffect, useState } from 'react';
import AddBreak from '../AddBreak/AddBreak';
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    const [cards, setCards] = useState([])
    const [time, setTime] = useState(0)
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])

    const handleAddTolist = (times) => {
        const newTime = parseInt(times)
        console.log(newTime);
        const totalTime = time + newTime;
        setTime(totalTime)
    }

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

                <div className='time-details'>
                    <h4>Exrise Details</h4>
                    <h5>Exercise time: {time}s;</h5>
                    <AddBreak></AddBreak>
                </div>
            </div>
        </div>
    );
};


export default Home;