import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleRegistration from '../SingleRegistration/SingleRegistration';

const AllRegistration = () => {
    
    const [registration, setRegistration] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/registration`)
        .then(res => res.json())
        .then(data => setRegistration(data))

    },[])

    return (
        <div className ="container">
            <div className="row">
                <div className="col-md-4 bg-gray">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 ">
                    <h3 className = "m-3 text-center">All Registration</h3>
                   <table className ="table border">
                       <thead>
                           <tr>
                               <th>userName</th>
                               <th>Email</th>
                               <th>eventName</th>
                               <th>RegistrationDate</th>
                               <th>Action</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                            registration.map(reg => <SingleRegistration reg = {reg}></SingleRegistration>)   
                           }
                       </tbody>

                   </table>
                </div>
            </div>
            
        </div>
    );
};

export default AllRegistration;