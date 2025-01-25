import './App.css';
import MyNavBar from './components/MyNavBar';
import Aboutus from './components/Aboutus';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import OurServices from './components/Services';
function App() {
  return (
    
       
        
       <>
       
       
      <Router>
      
         <MyNavBar title="Job-Search-Portal"/>
          
      <Routes>
        <Route path="/services" element={<OurServices />} /> 
        <Route path="/aboutus" element={<Aboutus/>}/>
      </Routes>
      </Router>
      


        
       </>
       
        
     
  );
}

export default App;
