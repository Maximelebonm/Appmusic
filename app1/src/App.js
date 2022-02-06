import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseScreen from './Screens/BaseScreen';
import ChoixInstrumentScreen from './Screens/ChoixInstrumentScreen';
import HomeScreen from './Screens/HomeScreen';
import NotFoundScreen from './Screens/NotFoundScreen';
import AuthScreen from './Screens/AuthScreen';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/authscreen" element={<AuthScreen />}/>
       
      </Routes>
    </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
        <Route index element={<HomeScreen />} />
          <Route path="/Choixinstrument" element={<ChoixInstrumentScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
