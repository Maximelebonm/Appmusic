import './App.css';
import { useContext } from "react";
import { AuthContext } from "./contexts/authContext";
import "./helpers/string.helpers";
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
import LogoutScreen from './Screens/logoutscreen';
import RenewPassWordScreen from './Screens/renewPasswordScreen';

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
            {auth.role === 0 &&<Route path="/register" element={<RegisterScreen />}/>}
            <Route path="/account/validation" element={<ValidationScreen />}/>
            {auth.role === 0 &&<Route path="/login" element={<LoginScreen />}/>}
            {auth.role === 0 &&<Route path="/renew" element={<RenewPassWordScreen />}/>}
          <Route path="/" element={<BaseScreen />}>
            <Route index element={<HomeScreen />} />
            {auth.role === 1 && <Route path="/profil" element={<ProfilScreen />} />}
            {auth.role === 1 && <Route path="/choixinstrument" element={<ChoixInstrumentScreen />} />}
            {auth.role === 1 && <Route path="/creation" element={<CreationScreen />} />}
            {auth.role === 1 && <Route path="/guitare" element={<GuitareScreen />} />}
            {auth.role === 1 && <Route path="/play" element={<PlayScreen />} />}
            {auth.role === 1 && <Route path="/logout" element={<LogoutScreen />} />}
            <Route path="/presentation" element={<PresentationScreen />} />
            <Route path="/explication" element={<ExplicationScreen />} />
          </Route>
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
