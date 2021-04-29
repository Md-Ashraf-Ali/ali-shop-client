import React, { useEffect, useState } from 'react';
import MySingleEvent from '../MySingleEvent/MySingleEvent';

const MyEvents = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const [myEvents, setMyEvents] = useState([])

    useEffect(() => {
        fetch(`https://thawing-taiga-56744.herokuapp.com/registration/${user.email}`)
        .then(res => res.json())
        .then(data => setMyEvents(data))

    },[])


    return (
        <div className = "container">
           <div className="row">
                {
                    myEvents.map(event => <MySingleEvent event={event}></MySingleEvent>)
                }  
          </div> 
        </div>
    );
};

export default MyEvents;