import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quote from './components/Quotes';
import Home from './components/homepage';
import Layout from './components/layout';
import Calculator from './components/input';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quotes" element={<Quote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
