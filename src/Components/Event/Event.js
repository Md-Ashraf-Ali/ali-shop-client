import React from 'react';
import { Link } from 'react-router-dom';

const Event = (props) => {
    
    const event = props.event;
    const {_id, name, img, description} = event;

    return (
        <div className = "col-md-3 mb-3 bg-light">
            <Link to ={`/registerEvent/${_id}`}>
                <div className="m-3 shadow rounded p-3 h-100">
                    <img className ="img-fluid" src={img} alt=""/>
                    <h4>{name}</h4>
                    <button className="btn btn-primary text-center m-3">Buy now</button>
                </div>
            </Link>
            
        </div>
    );
};

export default Event;