import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPG from './pages/LoginPg';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPG />} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
