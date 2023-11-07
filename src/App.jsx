import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div>hello</div>} />
      </Routes>
    </div>
  );
}

export default App;
