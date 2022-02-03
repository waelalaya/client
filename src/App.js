import './App.css';
import {Route, Routes}from 'react-router-dom'
import Signup from './Components/Signup/Signup.js';
import Dashbord from './Components/Dashbord/Dashbord';
import PrivateRoute from './Components/router/PrivateRoute';
import { useDispatch } from 'react-redux';
import { current } from './JS/actions/user';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
   dispatch(current) 
  }, []);
  
  return (
    <div className="App">
   <Navbar/>
     <Routes>
      <Route  path='/signup' element={<Signup/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path="/dashbord" element={<Dashbord/>}/>
        
      </Route>
    </Routes>
    </div>
  );
}

export default App;
