import React from 'react';
import { useHistory } from 'react-router';
import img from '../../images/delete.png'

const SingleRegistration = (props) => {

    const history = useHistory(); 
    const reg = props.reg;
    const {_id, userName, eventName, email, date} = reg;
    
    const handleDelete=()=>{
        fetch(`https://thawing-taiga-56744.herokuapp.com/deleteRegistration/${_id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            alert('your registration is successfully deleted');
            history.replace('/');
        });
        
    }
    return (
        <tr>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{eventName}</td>
            <td>{date}</td>
            <td><button onClick={handleDelete} className = "btn btn-danger">Delate <img className="img-fluid h-25 w-25 ms-3" src={img}/> </button></td>
        </tr>
    );
};

export default SingleRegistration;