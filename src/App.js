
import { useState } from 'react';
import './App.css';
import Navbar from './components/inner';
import TextPlace from './components/TextPlace';
import Alert from './components/Alert';
// import About from './components/About';
// import Footer from './components/footer';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// let a = <img src="public/logo512.png" alt="" />
// let a ='pink'

function App() {
  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);
  const putAlert = (msg , type) =>
  {
    setAlert(
      {
        msg:msg,
        type:type
      }
    )
    setTimeout(() => {setAlert(null)
      
    }, 1500);
  }
  const handleMode = () =>
    {
      if( mode === "light")
        {
          setMode("dark")
          document.body.style.backgroundColor="#0c1f3c";
           document.body.style.color="white";
          putAlert("Dark Mode has ben Enabled","success");
          // document.title ="Textutils - Dark mode";
        


        }
      else 
      {
        setMode("light") 
         document.body.style.backgroundColor="white";
         document.body.style.color="black";
         putAlert("Light Mode has ben Enabled","success");
          // document.title ="Textutils - Light mode";
          //changing title always
          // setInterval(
          //   ()=>
          //   {
          //     document.title ="download it";
          //   },2000


          // )
          // setInterval(
          //   ()=>
          //   {
          //     document.title ="install it";
          //   },1500

          // )
      }

    }
  return (
    <>
    {/* <Router> */}
    
    <Navbar name = "Textutils" about="About Us"  mode ={mode} fun = {handleMode}/>
    <Alert alert = {alert}/>
   


    <div className="container ">


    <TextPlace head="Enter the text to be analysed" alert = {putAlert}/>    
      {/* <Routes> */}
        {/* <Route exact path="/" element={<TextPlace head="Enter the text to be analysed" alert = {putAlert}/>} /> */}
         {/* <Route exact path="/about" element={<About />} /> */}
      {/* </Routes> */}



      
    </div>
    {/* <Footer/> */}

    {/* </Router> */}
    
    

    </>  


     
  

   
  );
}

export default App;
