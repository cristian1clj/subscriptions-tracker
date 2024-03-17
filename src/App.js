import './App.css';
import Header from './components/Header';
import FormAddMoney from './components/FormAddMoney';
import MainControl from './components/MainControl';
import { useState } from 'react';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const currentComponent = isValid
                           ? <MainControl budget={budget} />
                           : <FormAddMoney setBudget={setBudget} setIsValid={setIsValid} />

  return (
    <div className="App">
      <Header />
      { currentComponent }
    </div>
  );
}

export default App;
