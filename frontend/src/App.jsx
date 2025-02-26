import { Routes, Route } from 'react-router-dom';
import Dashboard from './app/pages/Dashboard/Dashboard';
import ComingSoon from './app/pages/ComingSoon/ComingSoon';
import LiveDemo from './app/pages/LiveDemo/LiveDemo';
import ProfessorInputs from './app/pages/ProfessorInputs/ProfessorInputs';
import Roster from './app/pages/Roster/Roster';
import Loading from './app/pages/Loading/Loading';
import Results1 from './app/pages/Results1/Results1';

// OR if App.jsx is already in the src/app folder:  
// import Dashboard from './pages/Dashboard/Dashboard';
// import ComingSoon from './pages/ComingSoon/ComingSoon';a

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/new-assignment" element={<Dashboard />} />
      <Route path="/past-assignments" element={<ComingSoon />} />
      <Route path="/ai-settings" element={<ComingSoon />} />
      <Route path="/classes" element={<ComingSoon />} />
      <Route path="/asyncdemo" element={<ComingSoon />} />
      <Route path="/livedemo" element={<LiveDemo />} />
      <Route path="/basic-demo" element={<ProfessorInputs />} />
      <Route path="/advanced-demo" element={<ComingSoon />} />
      <Route path="/roster" element={<Roster />} />
      <Route path="/loading" element={<Loading destinationPath="/results1" loadingTime={5000} />} />
      <Route path="/results1" element={<Results1 />} />
    </Routes>
  );
}

export default App;