import { useState } from 'react';
import Ask from '../Ask/Ask';
import Password from '../Password/Password';
import Success from '../Success/Success';
import './App.css';

function App() {
  const [stage, setStage] = useState(0);

  const updateStage = () => {
    setStage(stage + 1);
  }

  const resetStage = () => {
    setStage(0);
  }

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {stage === 0 && <Password goToNextStage={updateStage}/>}
        {stage === 1 && <Ask goToNextStage={updateStage}/>}
        {stage === 2 && <Success goToFirstStage={resetStage}/>}
      </div>
    </div>
  );
}

export default App;
