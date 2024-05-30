import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React ,{useState} from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {

  const [mode,setmode] = useState("light");

  const [alert,setAlert] = useState(null);


  const showAlert = (message,type)=>{
    setAlert({
        msg :message,
        type :type
      })
      setTimeout(() => { 
        setAlert(null);
      },2500);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor ='#24688d';
      showAlert("Dark mode has been enabled","success");
      document.title='Text Magic - Dark mode';
    }
    else{ 
      setmode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
      document.title='Text Magic - Light mode';
    }
  }
  return (
   <>
  

     {/* <Navbar title="Text Magic" aboutText="Aboutme" />  */}
     <Router>
     <Navbar title="Text Magic" mode={mode} toggleMode={toggleMode} /> 
     <Alert alert={alert} />

     <div className="container my-3">
      <Routes>
          <Route exact path='/about'element={<About/>}/>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter text to analyse here" mode={mode}/>} />

      </Routes>
     </div>

     </Router>
  </>
  );
}

export default App;
