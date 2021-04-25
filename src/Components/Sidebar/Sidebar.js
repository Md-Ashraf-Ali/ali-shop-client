import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="m-5 p-5 border border-primary h-100 bg-dark">
            <Link to='/allRegistration'><h3>AllRegistration</h3></Link>
            <Link to ='/addEvents'><h3>addEvents</h3></Link>
        </div>
    );
};

export default Sidebar;