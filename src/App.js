
import './App.css';
import Home from './Home';
import CVD from './CVD';
import Endocrine from './Endocrine';
import Gastro from './Gastro';
import Infectious from './Infectious';
import Neuro from './Neuro';
import Respiratory from './Respiratory';
import Rheum from './Rheum';
import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles';

/* Note: for the tool links, there was whitespace at the bottom, which I fixed by increasing the margin bottom. I don't know if there is a better alternative... */
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes> 
            <Route path="/" element={<Home />} />
            <Route exact path="/cvd" element={<CVD/>} />
            <Route exact path="/endocrine" element={<Endocrine/>} />
            <Route exact path="/gastroenterology" element={<Gastro/>} />
            <Route exact path="/infectious" element={<Infectious/>} />
            <Route exact path="/neurology" element={<Neuro/>} />
            <Route exact path="/respiratory" element={<Respiratory/>} />
            <Route exact path="/rheumatology" element={<Rheum/>} />
        </Routes>
    </div>
  );
}

export default App;
