  import './App.css';
  import React,{ useEffect } from "react";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import Bar from './components/bar/Bar';
  import Courses from './components/courses/Courses';
  import About from './components/about/About';
  import Students from './components/students/Students';
  import Contacts from './components/contacts/Contacts';
  import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
  import Assign from './components/assign/Assign';


  function App() {
    return (
      useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []),
      
      <div className="app">
      <Router>
        <Routes>
            <Route path="/" element={<Bar />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/students" element={<Students />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/assign" element={<Assign />} />
            
            
        </Routes>
      </Router>

      </div>
    );
  }

  export default App;
