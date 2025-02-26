import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Loading.module.scss';

const Loading = ({ destinationPath = '/results1', loadingTime = 10000 }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Set up timer to navigate after loadingTime (10 seconds by default)
    const timer = setTimeout(() => {
      navigate(destinationPath);
    }, loadingTime);
    
    // Clean up on unmount
    return () => {
      clearTimeout(timer);
    };
  }, [navigate, destinationPath, loadingTime]);
  
  return (
    <div className={styles.pageContainer}>
      <div className={styles.loadingSection}>
        <div className={styles.loadingContent}>
          <div className={styles.dotContainer}>
            {[...Array(8)].map((_, index) => (
              <div 
                key={index} 
                className={styles.dot} 
                style={{ animationDelay: `${index * 0.1}s` }} 
              />
            ))}
          </div>
          <p>Collecting responses...</p>
        </div>
      </div>
      <button
        className={styles.closeButton}
        onClick={() => navigate('/')}
      >
        ✕
      </button>
    </div>
  );
};

export default Loading;