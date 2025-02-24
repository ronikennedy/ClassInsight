import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './NavBar.module.scss';
import Logo from '../../assets/CI_Logo.png';
import ProfOr from '../../assets/Prof_Or.png';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleClassDropdown = (e) => {
    e.stopPropagation();
    setIsClassDropdownOpen(!isClassDropdownOpen);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = (e) => {
    e.stopPropagation();
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsClassDropdownOpen(false);
  };

  // Helper function to determine if a path is active
  const isActive = (path) => {
    if (path === '/new-assignment') {
      // Consider both root path and new-assignment as active for the New Assignment button
      return location.pathname === '/' || location.pathname === '/new-assignment';
    }
    return location.pathname === path;
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.leftSection}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="Class Insight Logo" className={styles.logo} />
          <span className={styles.logoText}>CLASS INSIGHT</span>
        </div>
      </div>

      <div className={styles.centerSection}>
        <button 
          className={`${styles.navButton} ${isActive('/new-assignment') ? styles.active : ''}`}
          onClick={() => navigate('/new-assignment')}
        >
          New Assignment
        </button>
        <button 
          className={`${styles.navButton} ${isActive('/past-assignments') ? styles.active : ''}`}
          onClick={() => navigate('/past-assignments')}
        >
          Past Assignments
        </button>
        <button 
          className={`${styles.navButton} ${isActive('/ai-settings') ? styles.active : ''}`}
          onClick={() => navigate('/ai-settings')}
        >
          AI Settings
        </button>
        <button 
          className={`${styles.navButton} ${isActive('/classes') ? styles.active : ''}`}
          onClick={() => navigate('/classes')}
        >
          Classes
        </button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.courseSelector} onClick={toggleClassDropdown}>
          <div className={styles.courseInfo}>
            <span className={styles.courseName}>Business Association</span>
            <span className={styles.courseCode}>LAW100 B</span>
          </div>
          <div className={styles.dropdownArrow}></div>
          
          {isClassDropdownOpen && (
            <div className={styles.classDropdown}>
              <div className={styles.dropdownItem}>
                <span className={styles.courseName}>Business Association</span>
                <span className={styles.courseCode}>LAW100 B</span>
              </div>
              {/* Add more classes here when available */}
            </div>
          )}
        </div>

        <div className={styles.profileSection}>
          <img 
            src={ProfOr} 
            alt="Profile" 
            className={styles.profilePic} 
            onClick={toggleProfileDropdown}
          />
          
          {isProfileDropdownOpen && (
            <div className={styles.profileDropdown}>
              <div className={styles.dropdownItem}>Settings</div>
              <div className={styles.dropdownItem}>Log Out</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;