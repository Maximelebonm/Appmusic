import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseScreen from './Screens/BaseScreen';
import ChoixInstrumentScreen from './Screens/ChoixInstrumentScreen';
import HomeScreen from './Screens/HomeScreen';
import NotFoundScreen from './Screens/NotFoundScreen';
import AuthScreen from './Screens/AuthScreen';
import ExplicationScreen from './Screens/ExplicationScreen';
import PresentationScreen from './Screens/PresentationScreen';


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>

   
          <Route path="/" element={<BaseScreen />}>
            <Route index element={<HomeScreen />} />
            <Route path="/auth" element={<AuthScreen />}/>
            <Route path="/presentation" element={<PresentationScreen />} />
            <Route path="/explication" element={<ExplicationScreen />} />
            <Route path="/Choixinstrument" element={<ChoixInstrumentScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
