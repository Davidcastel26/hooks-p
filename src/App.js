import logo from './logo.svg';
import './App.css';
import useCounter from './hooks/useCounter'

function App() {
  const counter = useCounter()
  const refInput = useRef(null)

  return (
    <div className="App">
       <button onClick={()=>{
         re
       }}>ir al input</button>
    </div>
  );
}

export default App;
