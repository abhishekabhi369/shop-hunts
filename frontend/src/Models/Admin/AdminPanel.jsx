import React, { useState } from 'react';
import './Admin.css';
import User from './admin-models/User';

function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState('Dashboard');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Dashboard':
        return (
          <div className="dashboard-content">
            {/* Content for Dashboard */}
            <h2>Dashboard Content</h2>
          </div>
        );
      case 'User':
        return (
          <div className="user-content">
            {/* Content for User */}
          <User/>
          </div>
        );
      case 'Store':
        return (
          <div className="store-content">
            {/* Content for Store */}
            <h2>Store Content</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='bg-white main-side d-flex'>
      <div className="sidebar bg-black">
        <div className='admin-text'>
          <h1>Admin Panel</h1>
        </div>
        <div className='items text-white'>
          <div onClick={() => handleTabClick('Dashboard')}><h4>DashBoard</h4></div>
          <div onClick={() => handleTabClick('User')}> <h4>User</h4></div>
          <div onClick={() => handleTabClick('Store')}><h4>Store</h4></div>
          <div onClick={() => handleTabClick(null)}><h4>Logout</h4></div>
        </div>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default AdminPanel;
