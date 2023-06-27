import './App.css';
import { DomRef } from './components/Ref/DomRef';
// import { MutableRef } from './components/Ref/MutableRef';

function App() {
  return (
    <div className="App">
      <DomRef />
      {/* <MutableRef /> */}
    </div>
  );
}

export default App;
