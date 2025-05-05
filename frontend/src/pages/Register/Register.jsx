import React, { useState, useEffect } from 'react';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const hackingCommands = [
  'nmap -sV 192.168.1.1',
  'hydra -l admin -P passwords.txt ssh://192.168.1.10',
  'sqlmap -u http://google.com/page?id=1 --dump',
  'airmon-ng start wlan0',
  'aircrack-ng -b XX:XX:XX:XX:XX:XX capture.cap',
];

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    if (!name || !email || !password) {
      toast.error('Access Denied: All fields are required.', { theme: 'dark' });
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Access Denied: Invalid email format.', { theme: 'dark' });
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        'Access Denied: Password must be 10 characters, include letters, numbers, and one special character.',
        { theme: 'dark' }
      );
      return;
    }

    toast.success('Access Granted', { theme: 'dark' });
    setForm({ name: '', email: '', password: '' });
  };

  useEffect(() => {
    const command = hackingCommands[commandIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < command.length) {
          setCurrentCommand(command.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCurrentCommand(command.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setCommandIndex((prev) => (prev + 1) % hackingCommands.length);
        }
      }
    }, deleting ? 50 : 100);
  
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, commandIndex]);
  

  return (
    <div className="terminal-container">
      <div className="terminal">
        <div className="terminal-header">
          <span className="red-dot"></span>
          <span className="yellow-dot"></span>
          <span className="green-dot"></span>
        </div>
        <p>Welcome to the Hacker Club Terminal</p>
        <p className="blinker">
          <span className="prompt">root@hackerclub:~$</span>{currentCommand}
          <span className="cursor">|</span>
        </p>
        <form onSubmit={handleSubmit}>
          <label className="prompt">Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" />

          <label className="prompt">Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />

          <label className="prompt">Password:</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="********@" />

          <button type="submit" className="terminal-btn">Register</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;











