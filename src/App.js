
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)

    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(32 33 95)';
      showalert("Dark mode has been enabled", "success");
      document.title = "Dark Mode";
      // setInterval(() => {
      //   document.title = "Amazing";
      // }, 2000);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
      document.title = "Light Mode";
      // setInterval(() => {
      //   document.title = "Should Use ReactJS";
      // }, 1500);
    }
  };

  return (
    <>
      <Router>
      <Navbar title="ReactJS" home="Home" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />

      <div className="container my-3">
        
        <Routes>
          <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform showalert={showalert} heading="Enter the Text to Analyze" mode={mode} />}/>
          </Routes>
        
        
        {/* <About/> */}
        </div>
      </Router> 

    </>

  );
}

export default App;
