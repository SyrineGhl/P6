import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import PropertyInfo from './pages/propertyInfo';
import NotFound from './pages/404';

function App() {
  return(
   <>
   <Router>
       <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/a-propos" exact element={<About />} />
        <Route path="/fiche-logement/:id" exact element={<PropertyInfo />} />        
        <Route path="/404" exact element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
       </Routes>
    </Router>
   </>
  );
}


export default App;
