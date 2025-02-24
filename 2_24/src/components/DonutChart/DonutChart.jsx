// src/app/components/DonutChart/DonutChart.jsx
import React from 'react';
import styles from './DonutChart.module.scss';

const DonutChart = ({ percentage, segments }) => {
  // Calculate the circle properties
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  
  // Function to convert segments to actual circle segments
  const createSegments = () => {
    // Sort segments by value (descending)
    const sortedSegments = [...segments].sort((a, b) => b.value - a.value);
    
    // Calculate start and end positions for each segment
    let currentAngle = 0;
    const segmentData = [];
    
    sortedSegments.forEach(segment => {
      // Calculate segment angle (in degrees)
      const segmentAngle = (segment.value / 100) * 360;
      
      // Calculate start and end coordinates
      const startX = 100 + radius * Math.cos((currentAngle - 90) * Math.PI / 180);
      const startY = 100 + radius * Math.sin((currentAngle - 90) * Math.PI / 180);
      
      const endAngle = currentAngle + segmentAngle;
      const endX = 100 + radius * Math.cos((endAngle - 90) * Math.PI / 180);
      const endY = 100 + radius * Math.sin((endAngle - 90) * Math.PI / 180);
      
      // Determine if the arc should take the long path (> 180 degrees)
      const largeArcFlag = segmentAngle > 180 ? 1 : 0;
      
      // Create SVG arc path
      const path = `
        M 100 100
        L ${startX} ${startY}
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
        Z
      `;
      
      segmentData.push({
        ...segment,
        path
      });
      
      // Update current angle for next segment
      currentAngle += segmentAngle;
    });
    
    return segmentData;
  };

  return (
    <div className={styles.donutChartWrapper}>
      <svg viewBox="0 0 200 200" className={styles.donutChart}>
        {/* Donut segments */}
        {createSegments().map((segment, index) => (
          <path
            key={index}
            d={segment.path}
            fill={segment.color}
            className={styles.segment}
          />
        ))}
        
        {/* Inner white circle to create donut effect */}
        <circle cx="100" cy="100" r="50" fill="white" />
        
        {/* Percentage text */}
        <text 
          x="100" 
          y="100" 
          textAnchor="middle" 
          dominantBaseline="middle" 
          className={styles.percentageText}>
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default DonutChart;