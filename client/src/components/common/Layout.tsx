import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="layout">
                <Sidebar />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Layout;