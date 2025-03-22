import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>IT Helpdesk</h2>
            <ul>
                <li>
                    <Link to="/assets">Assets</Link>
                </li>
                <li>
                    <Link to="/repairs">Repairs</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/auth/login">Login</Link>
                </li>
                <li>
                    <Link to="/auth/register">Register</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;