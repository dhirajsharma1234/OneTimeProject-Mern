import ViewNote from './components/viewNote';
import Home from './components/home';
import {  Route, Routes } from 'react-router-dom';
import "./App.css";

const App = () => {
  

  return (
          <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:token" element={<ViewNote/>}/>
          </Routes>   
          </>
  )
}

export default App