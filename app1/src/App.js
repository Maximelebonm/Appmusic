import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseScreen from './Screens/BaseScreen';
import ChoixInstrumentScreen from './Screens/ChoixInstrumentScreen';
import HomeScreen from './Screens/HomeScreen';
import NotFoundScreen from './Screens/NotFoundScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ExplicationScreen from './Screens/ExplicationScreen';
import PresentationScreen from './Screens/PresentationScreen';
import GuitareScreen from './Screens/GuitareScreen';
import PlayScreen from './Screens/PlayScreen';
import CreationScreen from './Screens/creationScreen';
import ProfilScreen from './Screens/ProfilScreen';
import ValidationScreen from './Screens/ValidationScreen';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

            <Route path="/login" element={<LoginScreen />}/>
            <Route path="/register" element={<RegisterScreen />}/>
            <Route path="/account/validation" element={<ValidationScreen />}/>
          <Route path="/" element={<BaseScreen />}>
            <Route index element={<HomeScreen />} />
            <Route path="/profil" element={<ProfilScreen />} />
            <Route path="/presentation" element={<PresentationScreen />} />
            <Route path="/explication" element={<ExplicationScreen />} />
            <Route path="/choixinstrument" element={<ChoixInstrumentScreen />} />
            <Route path="/creation" element={<CreationScreen />} />
            <Route path="/guitare" element={<GuitareScreen />} />
            <Route path="/play" element={<PlayScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
