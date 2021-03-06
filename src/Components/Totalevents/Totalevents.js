import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';
// import fakedata from '../Fakedata/Fakedata.json'

const Totalevents = () => {
    
    // const handleAddEvents = () => {
    //     fetch('https://thawing-taiga-56744.herokuapp.com/addevents',{
    //         method:'POST',
    //         headers:{'Content-Type':'application/json'},
    //         body: JSON.stringify(fakedata)
          
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data));

    // }

    const [evenData, setEvenData] = useState([]);
    
    useEffect(() => {
        fetch('https://thawing-taiga-56744.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvenData(data))
    },[])


    return (
        <div className="row">
            {/* <button onClick={handleAddEvents}>add all events</button> */}
            {
                evenData.map(e => <Event event={e}></Event>)
            }
        </div>
    );
};

export default Totalevents;