import React from 'react';
import Navbar from '../Navbar/Navbar';
import Totalevents from '../Totalevents/Totalevents';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="custom-header">
                <Navbar/>
                <div className ="container">
                    <div className="m-5 header">
                        <h1 className="text-center text-success">We always provide our product only for you</h1>
                            <div className ="d-flex justify-content-center">
                                <input className="form-control" type="text" placeholder="search......"/>
                                <button className ="btn btn-success">Search</button>
                            </div>
                    </div>
               </div>
            </div>
           <div className="container">
              <Totalevents></Totalevents>
           </div>
        </div>
    
    );
};

export default Home;