import './App.css'; 
import Alert from './components/Alert';
// import About from './components/About'; 
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'


// Importing Route 
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
   const[mode, setMode]= useState("light"); //whether dark mode is enable or not
  // don't use   const[color, setColor]= useState("light"); 
   const[alert, setAlert]= useState(null); 
   
   const showAlert =(message, type)=>{
     setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

   const toggleMode=()=>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor ='black';
    document.querySelector('nav').style.boxShadow = '0 2px 8px white';
    document.querySelectorAll('h1').forEach(h1 => {
      h1.style.color = 'white';
    })
    document.querySelectorAll('a').forEach(a => {
      a.style.color = 'white';
    })
      document.querySelectorAll('a').forEach(a => {
      a.addEventListener('mouseover', () => {
        a.style.color = 'white';
  });
  a.addEventListener('mouseout', () => {
    a.style.color = 'white';  
  });
})
    showAlert("Dark Mode Has Been Enabled","success");
    // setInterval(()=>{
    //   document.title='Install Now TextUtils';
    // }, 1000)
    // setInterval(()=>{
    //   document.title='TextUtils Website';
    // }, 2000)
  }
  else{
    setMode('light')
   document.body.style.backgroundColor ='white';
   document.querySelector('nav').style.boxShadow = '0 4px 10px grey';
   
   document.querySelectorAll('h1').forEach(h1 => {
     h1.style.color = 'black';
    })
    document.querySelectorAll('a').forEach(a => {
      a.style.color = 'black';
    })
    document.querySelectorAll('a').forEach(a => {
      a.addEventListener('mouseover', () => {
        a.style.color = 'white';
  });
  a.addEventListener('mouseout', () => {
    a.style.color = 'black';  
  });
});
showAlert("Light Mode Has Been Enabled","success");
// document.title='TextUtils- Light Mode';  use for gmail sender show (1) for email count in title
  }
}

   const toggle=()=>{
    if(mode === 'light'){
    setMode('secondary')
    document.body.style.backgroundColor ='#ffc107';
    document.querySelector('nav').style.boxShadow = '0 2px 8px black';
    document.querySelectorAll('h1').forEach(h1 => {
      h1.style.color = 'white';
    })
    document.querySelectorAll('a').forEach(a => {
      a.style.color = 'white';
    })
    document.querySelectorAll('a').forEach(a => {
  a.addEventListener('mouseover', () => {
    a.style.color = 'white';
  });
  a.addEventListener('mouseout', () => {
    a.style.color = 'white';  
  });
});
    showAlert("Color Mode Has Been Enabled","success");

   }
   else{
   setMode('light')
   document.body.style.backgroundColor ='white';
   document.querySelector('nav').style.boxShadow = '0 4px 10px grey';
   
   document.querySelectorAll('h1').forEach(h1 => {
     h1.style.color = 'black';
    })
    document.querySelectorAll('a').forEach(a => {
      a.style.color = 'black';
    })
      document.querySelectorAll('a').forEach(a => {
  a.addEventListener('mouseover', () => {
    a.style.color = 'white';
  });
  a.addEventListener('mouseout', () => {
    a.style.color = 'black';  
  });
})
    showAlert("Light Mode Has Been Enabled","success");
  }
}
  return (
    // jsx fragment
    <>  
 <Navbar title="React BY " service="Product" mode ={mode} toggleMode={toggleMode} toggle={toggle}/>
 {/* props  */}
<div className="container">
 <Alert alert={alert}/>
 </div>
 <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> 
 </div>


{/* <Router>
 <Navbar title="React BY " service="Product" mode ={mode} toggleMode={toggleMode} toggle={toggle}/>
<div className="container">
 <Alert alert={alert}/>
 </div>
 <div className="container my-3">
<Routes>
  <Route exact path="/about" element={<About />} />
  <Route exact path="/" element={
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> }
  />
</Routes>

 </div>
        </Router> */}
        
    </>
  );
}

export default App;
