import './App.css';
import Pallete from './Pallete';
import seedColor from './seedColor';

function App() {
  return (
    <div className="App">
      <Pallete {...seedColor[4]} />
    </div>
  );
}

export default App; 
