import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './ProfessorInputs.module.scss';

const ProfessorInputs = () => {
 const navigate = useNavigate();

 return (
   <div className={styles.pageContainer}>
     <NavBar />
     <main className={styles.mainContent}>
       <h1>Live Demo › Basic</h1>

       <div className={styles.progressBar}>
         <div className={styles.progress}></div>
       </div>

       <div className={styles.inputsContainer}>
         <div className={styles.inputSection}>
           <h2>Type or paste questions here</h2>
           <textarea 
             className={styles.textArea} 
             placeholder="Type here..."
           />
           <div className={styles.dropZone}>
             <img src="/path-to-upload-icon" alt="" />
             <span>Select a file or drag and drop here</span>
             <span className={styles.supportText}>Accepted file types: .pdf, .doc, .docx, .txt</span>
           </div>
         </div>

         <div className={styles.inputSection}>
           <h2>Type or paste responses here</h2>
           <textarea 
             className={styles.textArea} 
             placeholder="Type here..."
           />
           <div className={styles.dropZone}>
             <img src="/path-to-upload-icon" alt="" />
             <span>Select a file or drag and drop here</span>
             <span className={styles.supportText}>Accepted file types: .pdf, .doc, .docx, .txt</span>
           </div>
           <button className={styles.aiButton}>Use AI response</button>
         </div>
       </div>

       <div className={styles.navigation}>
         <button 
           className={styles.backButton}
           onClick={() => navigate('/livedemo')}
         >
           ←
         </button>
         <button 
           className={styles.nextButton}
           onClick={() => navigate('/roster')}
         >
           →
         </button>
       </div>
     </main>
   </div>
 );
};

export default ProfessorInputs;