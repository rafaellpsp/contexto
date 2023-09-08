import { HandleCounter } from './components/HandleCounter';
import { DoubleCounter } from './components/DoubleCounter';
import { CounterContextProvider } from './Context/CounterContext';
import './App.css'

function App() {
  
  return (
    <div className='App'>
      <CounterContextProvider>
        <div>
          <HandleCounter />
          <DoubleCounter />
        </div>
      </CounterContextProvider>
    </div>
  )
}

export default App
