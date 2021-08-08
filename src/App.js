import Pallete from './Pallete';
import seedColor from './seedColor';

function App() {
  return (
    <div>
      <Pallete {...seedColor[2]} />
    </div>
  );
}

export default App;
