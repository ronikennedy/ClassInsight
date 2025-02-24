// src/app/pages/Results1/Results1.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import DonutChart from '/Users/ronikennedy/classinsight_frontend/src/components/DonutChart/DonutChart';
import styles from './Results1.module.scss';

// You would replace this with your actual data from backend
const mockData = {
  topicQuestion: "Explain the concept of judicial review and its significance in U.S. law.",
  chartPercentage: 73,
  conceptBreakdown: [
    { name: "UNCLOS", color: "#B8F5B1", value: 40 },
    { name: "Exclusionary Rule", color: "#F5756B", value: 20 },
    { name: "Doctrine of Precedent", color: "#345B79", value: 15 },
    { name: "Hearsay Rule", color: "#E5EBF0", value: 25 }
  ]
};

const Results1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    // In a real application, you would check against the total number of results
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <div className={styles.pageContainer}>
      <NavBar />
      
      <main className={styles.mainContent}>
        <div className={styles.resultHeader}>
          <h1>Results</h1>
          <div className={styles.actionButtons}>
            <button className={styles.questionIndexBtn}>Q1</button>
            <button className={styles.exportBtn}>Open CSV</button>
          </div>
        </div>

        <div className={styles.topicQuestion}>
          {mockData.topicQuestion}
        </div>

        <div className={styles.chartSection}>
          <button className={styles.navButton} onClick={handlePrevious}>
            &lt;
          </button>
          
          <div className={styles.donutChartContainer}>
            <DonutChart 
              percentage={mockData.chartPercentage} 
              segments={mockData.conceptBreakdown} 
            />
          </div>

          <div className={styles.legendContainer}>
            {mockData.conceptBreakdown.map((concept, index) => (
              <div key={index} className={styles.legendItem}>
                <div 
                  className={styles.legendColor} 
                  style={{ backgroundColor: concept.color }}
                />
                <div className={styles.legendName}>{concept.name}</div>
              </div>
            ))}
          </div>

          <button className={styles.navButton} onClick={handleNext}>
            &gt;
          </button>
        </div>

        <div className={styles.bottomActions}>
          <button className={styles.actionButton}>
            <span className={styles.downloadIcon}>↓</span>
          </button>
          <button className={styles.actionButton}>
            <span className={styles.shareIcon}>↗</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Results1;