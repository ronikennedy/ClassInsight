import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../../../components/NavBar/NavBar';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <main className={styles.mainContent}>
        <h1>Start Assignment</h1>
        
        <div className={styles.assignmentCards}>
          <div className={styles.card}>
            <img 
              src="https://media.istockphoto.com/id/1366724877/photo/rear-view-of-mature-teacher-talking-to-his-student-during-lecture-at-university-classroom.jpg?s=612x612&w=0&k=20&c=PYpAFHxiUKX2i1D8w_ElnGsm1B64GBleyF-DfYTLcN0=" 
              alt="Live Class"
              className={styles.cardImage}
            />
            <h2>Live</h2>
            <p>Real-Time Class Demo</p>
            <button 
              className={styles.beginButton}
              onClick={() => navigate("/livedemo")}
            >
              Begin
            </button>
          </div>
          
          <div className={styles.card}>
            <img 
              src="https://st2.depositphotos.com/1010550/8538/i/450/depositphotos_85380848-stock-photo-beautiful-young-woman-working-with.jpg"
              alt="Asynchronous"
              className={styles.cardImage}
            />
            <h2>Asynchronous</h2>
            <p>At-Home Assignments</p>
            <button 
              className={styles.beginButton}
              onClick={() => navigate("/asyncdemo")}
            >
              Begin
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
