import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Stateeg1 from './components/Stateeg1';
import Tablejo from './components/Tablejo';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';
function App() {
  <ApiGet/>
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<StateBasics/>}/>
        <Route path='/first' element={<First/>}/>
        <Route path='/table' element={<Tablejo/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/axios'  element={<ApiGet/>}/>    
      </Routes>
    </div>
  );
}

export default App;
