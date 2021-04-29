import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const AddEvents = () => {

    const [event, setEvent] = useState({});
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch('https://thawing-taiga-56744.herokuapp.com/addEvent',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(event)
                      
            })
            .then(res => res.json())
            .then(data => {
                alert('your event successfully add')
                history.replace('/');
            })

    }

    const handleOnBlur =(e) => {
        const newEvent = event;
        newEvent[e.target.name] = e.target.value;
        setEvent(newEvent);

    }
    return (
        <div className = "container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h3 className ="m-3 text-center" >Add new event</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onBlur ={handleOnBlur} className = "form-control" name="name" placeholder="eventName" required/> <br/>
                        <input type="text" onBlur ={handleOnBlur} className = "form-control" name="description" placeholder="eventDescription" required/><br/>
                        <input type="text" onBlur ={handleOnBlur} className = "form-control" name="img" placeholder="Image URL" required/><br/>
                        <button className ="btn btn-primary">AddEvent</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvents;