import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = '/create';
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login. Please try again.');
    }
  };

  return (
    <div className='flex justify-center items-center '>
      <form onSubmit={handleSubmit} className='space-y-4 flex flex-col my-8 justify-center items-center'>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='ml-6 border border-gray-400 rounded w-60 h-8' />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className='ml-6 border border-gray-400 rounded w-60 h-8'/>
        </label>
        <br />
        <button type="submit" className=' bg-bootbnb-300 w-40 rounded-lg h-10 hover:bg-bootbnb-600 '>Login</button>
      </form>
    </div>
  );
}

export default Login;