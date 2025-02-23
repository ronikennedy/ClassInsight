import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './Roster.module.scss';

const Roster = () => {
  const navigate = useNavigate();
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState({});

  const studentData = Array(8).fill().map((_, index) => ({
    id: index,
    name: "Anderson, Joseph",
    email: "ajs5@miami.edu"
  }));

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectedAll(isChecked);
    const newSelected = {};
    studentData.forEach(student => {
      newSelected[student.id] = isChecked;
    });
    setSelectedStudents(newSelected);
  };

  const handleSelectStudent = (id) => {
    const newSelected = { ...selectedStudents };
    newSelected[id] = !newSelected[id];
    setSelectedStudents(newSelected);
  };

  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <main className={styles.mainContent}>
        <h1>Live Demo › Basic › Roster</h1>

        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>

        <div className={styles.rosterSection}>
          <div className={styles.rosterHeader}>
            <h2>Class Roster</h2>
            <button className={styles.exportButton}>
              Export selected as CSV
            </button>
          </div>

          <div className={styles.rosterContainer}>
            <label className={styles.selectAll}>
              <input 
                type="checkbox"
                checked={selectedAll}
                onChange={handleSelectAll}
              />
              <span>Select All</span>
            </label>
            
            <div className={styles.scrollableList}>
              {studentData.map((student) => (
                <label key={student.id} className={styles.rosterItem}>
                  <input 
                    type="checkbox"
                    checked={selectedStudents[student.id] || false}
                    onChange={() => handleSelectStudent(student.id)}
                  />
                  <span>{student.name} — {student.email}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.dropZone}>
            <span>Select a file or drag and drop here</span>
            <span className={styles.supportText}>Format: csv size limits max 10MB</span>
          </div>
        </div>

        <div className={styles.navigation}>
          <button 
            onClick={() => navigate('/basic-demo')}
            className={styles.backButton}
          >
            ←
          </button>
          <button 
            onClick={() => navigate('/loading')}
            className={styles.nextButton}
          >
            →
          </button>
        </div>
      </main>
    </div>
  );
};

export default Roster;