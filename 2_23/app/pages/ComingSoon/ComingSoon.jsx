import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ComingSoon.module.scss';
import NavBar from '../../../components/NavBar/NavBar';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Coming Soon</h1>
          <p>This feature will be available in the latter half of 2025. Thank you for your patience!</p>
          <button onClick={() => navigate(-1)} className={styles.backButton}>
            <span className={styles.arrow}>←</span>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;