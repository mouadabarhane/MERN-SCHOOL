import './LoginSection.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const LoginSection = () => {
    const api = 'http://localhost:3001';
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        Axios.get(`${api}/users`)
        .then((res) => {
            setUsers(res.data);
        })
        .catch((error) => {
            console.error('Axios Error:', error);
            // Handle the error, e.g., show a user-friendly message to the user
        });
    }, []); // Empty dependency array to fetch users only once

    const createUser = () => {
        if (name && age && email && message) {
          Axios.post(`${api}/createUser`, { name, age, email, message })
            .then((res) => {
                setName('');
        setAge('');
        setEmail('');
        setMessage('');
            })
            .catch((error) => {
              // Handle any errors that may occur during the POST request
              console.error('Error:', error);
            });
        }
      };
      

      const handleSubmit = (e) => {
         // Prevent the default form submission behavior
        
        
      
        createUser(); // Call the createUser function to handle form submission
      };
      

    return (
        <>
            
            <div className="contact-form container">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <input className="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input className="age" type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                    <input className="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="message" type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
                    <button type="submit">Create User </button>
                </form>
            </div>
        </>
    );
};

export default LoginSection;
