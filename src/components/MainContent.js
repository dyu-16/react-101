import React from 'react';
import reactBackground from '../images/reactBackground.jpg';

export default function MainContent() {
    return (
        <div className='main'>
            <h1>Fun Facts About React</h1>
            <ul className='main-items'>
                <li>Was first released in 2013</li>
                <li>Was oringally created by Jordan Wilke</li>
                <li>Has over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
  }