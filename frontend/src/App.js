import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home';
import APropos from './pages/a_propos_logement';
import FicheLogement from './pages/fiche_logement';
import QuatreCentQuatre from './pages/404';

function App() {
  return(
   <>
   <Router>
       <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/a-propos" exact element={<APropos />} />
        <Route path="/fiche-logement" exact element={<FicheLogement />} /> 
        <Route path="/404" exact element={<QuatreCentQuatre />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
       </Routes>
    </Router>
   </>
  );
}


export default App;
