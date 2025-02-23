import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './LiveDemo.module.scss';

const LiveDemo = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <main className={styles.mainContent}>
        <h1>Live Demo</h1>
        
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
              alt="Basic evaluation"
              className={styles.cardImage}
            />
            <h2>Basic</h2>
            <p>Evaluate responses for accuracy and similarity.</p>
            <button 
              className={styles.chooseButton}
              onClick={() => navigate("/basic-demo")}
            >
              Choose
            </button>
          </div>

          <div className={styles.card}>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2560&auto=format&fit=crop"
              alt="Advanced evaluation"
              className={styles.cardImage}
            />
            <h2>Advanced</h2>
            <p>Evaluate responses for clarity, conciseness, tone, and more.</p>
            <button 
              className={styles.chooseButton}
              onClick={() => navigate("/advanced-demo")}
            >
              Choose
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LiveDemo;
