import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import PartSelection from './pages/PartSelection';
import Assembly from './pages/Assembly';
import FinalResult from './pages/FinalResult';
import { ItemProvider } from './context/ItemContext';

const App = () => {
  return (
    <ItemProvider>
      <Router>
        <Nav />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/selection" element={<PartSelection />} />
            <Route path="/assemble" element={<Assembly />} />
            <Route path="/final" element={<FinalResult />} />
          </Routes>
        </div>
      </Router>
    </ItemProvider>
  );
};

export default App;
