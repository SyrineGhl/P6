import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home';
import APropos from './pages/about';
import FicheLogement from './pages/propertyInfo';
import QuatreCentQuatre from './pages/404';

function App() {
  return(
   <>
   <Router>
       <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/a-propos" exact element={<APropos />} />
        <Route path="/fiche-logement/:id" exact element={<FicheLogement />} />        
        <Route path="/404" exact element={<QuatreCentQuatre />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
       </Routes>
    </Router>
   </>
  );
}


export default App;
