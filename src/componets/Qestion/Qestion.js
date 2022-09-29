import React from 'react';
import './Qestion.css'

const Qestion = () => {
    return (
        <div className='qna-container'>
            <div className='qestion-degin'>
                <h3>How to React work?</h3>
                <p>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
            <div className='qestion-degin'>
                <h3>What is different props and state</h3>
                <p>Answer: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component</p>
            </div>
            <div className='qestion-degin'>
                <h3>which place we use effect without api data load?</h3>
                <p>Answer: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component</p>
            </div>
        </div>
    );
};

export default Qestion;