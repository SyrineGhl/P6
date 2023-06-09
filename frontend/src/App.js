import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import "./App.css";
import QuatreCentQuatre from './pages/404';
import FicheLogement from './pages/fiche_logement';
import Home from './pages/home';
import APropos from './pages/a_propos_logement';

function App() {
  return(
   <>
   <Router>
       <Routes>
        <Route path="/404" exact element={<QuatreCentQuatre />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/a_propos" exact element={<APropos />} />
        <Route path="/fiche_logement" exact element={<FicheLogement />} /> 
        <Route path="*" element={<Navigate to="/404" replace />} />
       </Routes>
    </Router>
   </>
  );
}


export default App;
