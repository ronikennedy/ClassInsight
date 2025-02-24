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
              src="https://www.uwphotographyguide.com/sites/default/files/u2168/_BTH4228.jpg"
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
              src="https://media.istockphoto.com/id/1498846229/photo/businessman-pressing-on-virtual-screen-and-select-customization.jpg?s=612x612&w=0&k=20&c=kTc-ValbAhNNWHudOl8f5q6v2sbNAA5UabWiVIxkcco="
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
