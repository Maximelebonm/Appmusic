import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseScreen from './Screens/BaseScreen';
import ChoixInstrumentScreen from './Screens/ChoixInstrumentScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}/>
        <Route path="/Choixinstrument" element={<ChoixInstrumentScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
